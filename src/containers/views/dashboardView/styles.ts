import styled from 'styled-components';
import { Close, Checkmark, TrashCan, Edit, AddAlt } from '@carbon/icons-react';
import { small, title3 } from '../../../styles/theme/typography';

export const Container = styled(small)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
`;

export const Title = styled(title3)`
  margin-inline-start: 1.5rem;
  margin-block: 1rem;
`;

export const AddAltIcon = styled(AddAlt)`
  cursor: pointer;
`;

export const Wrapper = styled.div`
  margin-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const EditingWrapper = styled.div`
  margin-block: 0;
  display: flex;
  gap: 1.25rem;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.625rem;
`;

export const ItemTitle = styled.div``;

export const CloseIcon = styled(Close)`
  padding-block-start: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary.supportError200};
`;
export const TaskWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
`;

export const CheckIcon = styled(Checkmark)`
  padding-block-start: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary.supportSuccess200};
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
`;

export const TrashCanIcon = styled(TrashCan)`
  cursor: pointer;
`;

export const EditIcon = styled(Edit)`
  cursor: pointer;
`;
