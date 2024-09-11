import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const navigate = useNavigate(); 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users', { withCredentials: true });
        setUsers(res.data);  
      } catch (err) {
        console.log("Error fetching users:", err.response ? err.response.data : err.message);
      }
    };
    
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Bio</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.bio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Navigation to Login Page */}
      <div className="mt-3 text-center">
          <p>Want to go back to login page 
            <button 
              type="button" 
              className="btn btn-link"
              onClick={() => navigate('/')}  // Navigate to login page
            >
              Login
            </button>
          </p>
        </div>
    </div>
  );
};

export default UserList;
