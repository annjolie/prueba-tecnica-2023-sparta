import React from 'react';
import {
  Container,
  TitleWrapper,
  Title,
  AddAltIcon,
  Wrapper,
  Item,
  ItemTitle,
  CloseIcon,
  CheckIcon,
  TaskWrapper,
  TrashCanIcon,
  EditIcon
} from './styles';
import Navbar from '../../../components/Navbar';
import InputText from '../../../components/InputText';
import { useLogic } from './logic';
import Checkbox from '../../../components/Checkbox';

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
        <AddAltIcon onClick={() => {}} />
      </TitleWrapper>
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
            <TaskWrapper>
              <Checkbox
                onChange={() => handleToggleItem(item.id)}
                checked={item.completed}
                label=''
              />
              <Item key={item.id}>
                <ItemTitle>{item.description}</ItemTitle>
                <TrashCanIcon onClick={() => handleDeleteItem(item.id)} />
                <EditIcon onClick={() => handleEditItem(item.id)} />
              </Item>
            </TaskWrapper>
          );
        })}
      </Wrapper>
    </Container>
  );
}
