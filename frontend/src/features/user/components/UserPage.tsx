
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { Avatar, Container, ErrorMsg, Input, Label, Title, UserInfo } from '../styles/common.styles';

export default function UserPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { user, loading, error } = useUser(id);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate(`/users/${e.target.value}`);
  };

  return (
    <Container>
      <Title>User Info</Title>
      <Label>
        User ID:
        <Input type="number" value={id || ''} onChange={handleChange} min={0} />
      </Label>
      {loading && <p>Loading...</p>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {user && (
        <UserInfo>
          <Avatar src={user.avatar} alt={user.first_name} />
          <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </UserInfo>
      )}
    </Container>
  );
}