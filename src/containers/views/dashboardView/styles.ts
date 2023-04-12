import styled from 'styled-components';
import { Close, Checkmark, TrashCan, Edit } from '@carbon/icons-react';

export const Container = styled.div``;

export const Title = styled.div``;

export const Wrapper = styled.div``;

export const Item = styled.div``;

export const ItemTitle = styled.div``;

export const CloseIcon = styled(Close)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary.supportError200};
`;

export const CheckIcon = styled(Checkmark)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary.supportSuccess200};
`;

export const TrashCanIcon = styled(TrashCan)``;

export const EditIcon = styled(Edit)``;
