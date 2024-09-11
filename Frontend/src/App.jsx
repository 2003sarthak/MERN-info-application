import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login';
import SignupForm from './components/Signup';
import UserList from './components/UserList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm/>} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
}

export default App;
