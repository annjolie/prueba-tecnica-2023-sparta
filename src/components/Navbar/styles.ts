import styled from 'styled-components';
import { H2Heading, Body1 } from '../Typography/styles';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary.neutral600};
`;

export const Title = styled(H2Heading)``;

export const Wrapper = styled(Link)`
  cursor: pointer;
  display: flex;
  gap: 1rem;
  text-decoration: none;
  :visited {
    color: ${({ theme }) => theme.colors.primary.neutral800};
  }
`;

export const Text = styled(Body1)``;

export const IconContainer = styled(Body1)`
  margin-inline-end: 0.5rem;
`;
