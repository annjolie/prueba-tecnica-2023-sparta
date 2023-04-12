import React from 'react';
import {
  Container,
  TitleWrapper,
  Title,
  AddAltIcon,
  Wrapper,
  EditingWrapper,
  Item,
  ItemTitle,
  CloseIcon,
  CheckIcon,
  IconsWrapper,
  TaskWrapper,
  TrashCanIcon,
  EditIcon
} from './styles';
import Navbar from '../../../components/Navbar';
import InputText from '../../../components/InputText';
import { useLogic } from './logic';
import Checkbox from '../../../components/Checkbox';
import { TaskTypes } from '../../../logic/tasks/actionTypes';

export default function DashboardView(): JSX.Element {
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
    <Container>
      <Navbar logOut={handleLogout} />
      <TitleWrapper>
        <Title>List</Title>
        <AddAltIcon onClick={() => handleAddItem()} />
      </TitleWrapper>
      <Wrapper>
        {tasks.map((item: TaskTypes) => {
          return item.editing ? (
            <EditingWrapper>
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
              <CloseIcon
                onClick={() => handleCancelItemChange(item.id)}
                size='24'
              />
              <CheckIcon onClick={() => handleUpdateItem(item.id)} size='24' />
            </EditingWrapper>
          ) : (
            <TaskWrapper>
              <Checkbox
                onChange={() => handleToggleItem(item.id)}
                checked={item.completed}
                label={item.description || 'No description'}
                id={item.description || 'No description'}
                disabled={false}
              />
              <Item key={item.id}>
                <ItemTitle>{item.description}</ItemTitle>
                <IconsWrapper>
                  <TrashCanIcon onClick={() => handleDeleteItem(item.id)} />
                  <EditIcon onClick={() => handleEditItem(item.id)} />
                </IconsWrapper>
              </Item>
            </TaskWrapper>
          );
        })}
      </Wrapper>
    </Container>
  );
}
