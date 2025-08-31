import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from './config';

function User() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`${API_BASE_URL}/users/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('User not found');
        return res.json();
      })
      .then(data => {
        setUser(data)
        console.log(data)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate(`/users/${e.target.value}`);
  };

  return (
    <div>
      <h2>User Info</h2>
      <label>
        User ID:
        <input type="number" value={id || ''} onChange={handleChange} min={1} max={12} />
      </label>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
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

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<div><h1>React App</h1><p>Go to /user/2 for example.</p></div>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
