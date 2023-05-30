import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';

const UserDetail = () => {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const user = users[id];

  return user ? (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Favorite Color: {user.favoriteColor}</p>
      <p>Favorite Pokemon: {user.favoritePokemon}</p>
    </div>
  ) : (
    <p>No user found.</p>
  );
};

export default UserDetail;