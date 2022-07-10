import { Routes, Route } from 'react-router-dom';
import { About, Home, EditUser, UserInfo } from './pages';
import { Header } from './components';

import './App.css';

const App = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='edit-user' element={<EditUser />} />
        <Route path='add-user' element={<EditUser />} />
        <Route path='edit-user/:id' element={<EditUser />} />
        <Route path='user-info/:id' element={<UserInfo />} />
      </Route>
    </Routes>
  </div>
);

export default App;
