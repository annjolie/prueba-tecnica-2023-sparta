import React from 'react';
import {
  Container,
  Title,
  Wrapper,
  Item,
  ItemTitle,
  CloseIcon,
  CheckIcon,
  TrashCanIcon,
  EditIcon
} from './styles';
import Navbar from '../../../components/Navbar';
import { DashboardProps } from './types';
import InputText from '../../../components/InputText';
import { useLogic } from './logic';

export default function Dashboard({ className }: DashboardProps): JSX.Element {
  const {
    tasks,
    handleItemDescriptionChange,
    handleAddItem,
    handleEditItem,
    handleToggleItem,
    handleDeleteItem,
    handleCancelItemChange,
    handleUpdateItem,
    handleLogout,
    getEditingValue
  } = useLogic();
  return (
    <Container className={className}>
      <Navbar logOut={handleLogout} />
      <Title>List</Title>
      <Wrapper>
        {tasks.map((item) => {
          return item.editing ? (
            <>
              <InputText
                id='{id}'
                name='{input-name}'
                value={getEditingValue(item.id)}
                type='text'
                onChange={(event) =>
                  handleItemDescriptionChange(
                    item.id,
                    event.currentTarget.value
                  )
                }
              />
              <CloseIcon onClick={() => handleCancelItemChange(item.id)} />
              <CheckIcon onClick={() => handleUpdateItem(item.id)} />
            </>
          ) : (
            <>
              <Item key={item.id}>
                <ItemTitle>{item.description}</ItemTitle>
                <TrashCanIcon onClick={() => handleDeleteItem(item.id)} />
                <EditIcon onClick={() => handleEditItem(item.id)} />
              </Item>
            </>
          );
        })}
      </Wrapper>
    </Container>
  );
}
