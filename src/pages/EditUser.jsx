import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';

import { createUserStart, updateUserStart } from '../store/actions';

const initState = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

export const EditUser = () => {
  const [editMode, setEditMode] = useState(false);
  const [formValue, setFormValue] = useState(initState);
  const { name, email, phone, address } = formValue;

  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  const onInputChange = ({ target }) => {
    const { name: inputName, value: inputValue } = target;
    setFormValue((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !address) return;

    if (editMode) {
      dispatch(updateUserStart({ userInfo: formValue, navigate }));
    } else {
      dispatch(createUserStart({ formValue, navigate }));
    }
  };

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((user) => user.id === Number(id));
      setFormValue({ ...singleUser });
    } else {
      setEditMode(false);
      setFormValue({ ...initState });
    }
  }, [id]);

  return (
    <MDBValidation
      className='row g-3'
      style={{ marginTop: '5rem' }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className='fs-2 fw-bold'> {editMode ? 'Update User' : 'Add User'} </p>

      <div
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '30rem',
          alignContent: 'center',
        }}
      >
        <MDBValidationItem invalid feedback='*Please provide a name'>
          <MDBInput
            value={name}
            name='name'
            type='text'
            onChange={onInputChange}
            required
            label='Name'
          />
        </MDBValidationItem>
        <br />

        <MDBValidationItem invalid feedback='*Please provide a email'>
          <MDBInput
            value={email}
            name='email'
            type='email'
            onChange={onInputChange}
            required
            label='Email'
          />
        </MDBValidationItem>
        <br />

        <MDBValidationItem invalid feedback='*Please provide a phone'>
          <MDBInput
            value={phone}
            name='phone'
            type='tel'
            onChange={onInputChange}
            required
            label='Phone'
          />
        </MDBValidationItem>
        <br />

        <MDBValidationItem invalid feedback='*Please provide a address'>
          <MDBInput
            value={address}
            name='address'
            type='text'
            onChange={onInputChange}
            required
            label='Address'
          />
        </MDBValidationItem>
        <br />

        <div className='col-12'>
          <MDBBtn style={{ marginRight: 10 }} type='submit'>
            {editMode ? 'Update' : 'Add'}
          </MDBBtn>
          <MDBBtn onClick={() => navigate('/')} color='danger'>
            Go Bank
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};
