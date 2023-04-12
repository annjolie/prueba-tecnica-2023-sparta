import styled from 'styled-components';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';

export const Container = styled.div`
  width: 25%;
  margin: 5rem auto;
  box-shadow: ${({ theme }) => theme.colors.shadows.shadow24};
  padding: 25px;
`;

export const LoginForm = styled.form``;

export const UserInput = styled(InputText)``;

export const PasswordInput = styled(InputText)``;

export const LoginButton = styled(Button).attrs({ type: 'button' })``;
