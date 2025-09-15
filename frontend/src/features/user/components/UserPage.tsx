import { useParams } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import {
  Avatar,
  Container,
  ErrorMsg,
  Title,
  UserInfo,
} from "../styles/common.styles";

export default function UserPage() {
  const { id } = useParams<{ id: string }>();

  const { user, loading, error } = useUser(id);

  return (
    <Container>
      <Title>User Info</Title>
      {loading && <p>Loading...</p>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {user && (
        <UserInfo>
          <Avatar src={user.avatar} alt={user.first_name} />
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.first_name} {user.last_name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </UserInfo>
      )}
    </Container>
  );
}
