import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export default function UserPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { user, loading, error } = useUser(id);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate(`/users/${e.target.value}`);
  };

  return (
    <div>
      <h2>User Info</h2>
      <label>
        User ID:
        <input type="number" value={id || ''} onChange={handleChange} min={0} />
      </label>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div>
          <img src={user.avatar} alt={user.first_name} />
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}
