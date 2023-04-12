import styled from 'styled-components';
import { Close, Checkmark, TrashCan, Edit, AddAlt } from '@carbon/icons-react';
import { body1 } from '../../../styles/theme/typography';

export const Container = styled(body1)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
`;

export const Title = styled.div``;

export const AddAltIcon = styled(AddAlt)`
  cursor: pointer;
`;

export const Wrapper = styled.div``;

export const Item = styled.div``;

export const ItemTitle = styled.div``;

export const CloseIcon = styled(Close)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary.supportError200};
`;
export const TaskWrapper = styled(Close)`
  display: flex;
  gap: 0.625rem;
`;

export const CheckIcon = styled(Checkmark)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary.supportSuccess200};
`;

export const TrashCanIcon = styled(TrashCan)``;

export const EditIcon = styled(Edit)``;
