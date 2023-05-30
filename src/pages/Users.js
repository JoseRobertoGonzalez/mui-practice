import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Users = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      {users.map((user, index) => (
        <Link to={`/users/${index}`} key={index}>
          <h2>{user.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Users;