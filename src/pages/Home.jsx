import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  // MDBSpinner,
} from 'mdb-react-ui-kit';
import { loadUserStart, deleteUserStart } from '../store/actions';

export const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, users, error } = useSelector((state) => state.user);

  const handleDelete = (id) => {
    console.log(id);
    if (window.confirm('確定要刪除嗎？')) {
      dispatch(deleteUserStart(id));
    }
  };

  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  return (
    <div className='container mt-5'>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        {users?.map((user, index) => (
          <MDBTableBody key={user.id}>
            <tr>
              <th scope='row'>{index + 1}</th>
              <th>{user.name}</th>
              <th>{user.email}</th>
              <th>{user.phone}</th>
              <th>{user.address}</th>
              <th>
                <MDBBtn
                  color='none'
                  tag='span'
                  onClick={() => handleDelete(user.id)}
                >
                  <MDBTooltip title='Delete' tag='span'>
                    <MDBIcon
                      size='lg'
                      fas
                      icon='trash'
                      style={{ color: '#dd4b39' }}
                    />
                  </MDBTooltip>
                </MDBBtn>

                <Link to={`/edit-user/${user.id}`}>
                  <MDBTooltip title='Edit' tag='span'>
                    <MDBIcon
                      size='lg'
                      fas
                      icon='pen'
                      style={{ color: '#55acee', marginLeft: 10 }}
                    />
                  </MDBTooltip>
                </Link>

                <Link to={`/user-info/${user.id}`}>
                  <MDBTooltip title='View' tag='span'>
                    <MDBIcon
                      size='lg'
                      fas
                      icon='eye'
                      style={{ color: '#3b5938', marginLeft: 10 }}
                    />
                  </MDBTooltip>
                </Link>
              </th>
            </tr>
          </MDBTableBody>
        ))}
      </MDBTable>
    </div>
  );
};
