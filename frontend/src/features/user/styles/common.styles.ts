import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
`;

export const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin-left: 0.5rem;
`;

export const UserInfo = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const ErrorMsg = styled.p`
  color: #d32f2f;
  font-weight: 500;
`;