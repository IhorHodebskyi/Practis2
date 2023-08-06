import { RiDeleteBinLine } from 'react-icons/ri';
import {
  AiFillLike,
  AiFillDislike,
  AiFillSave,
  AiFillEdit,
} from 'react-icons/ai';
import { Text } from 'components';
import {
  DeleteButton,
  LikeButton,
  TodoWrapper,
  EditButton,
  InputEdit,
} from './Todo.styled';
import { useDispatch } from 'react-redux';
import {
  deleteToDo,
  incrementLike,
  decrementLike,
  editeToDo,
} from 'redux/ToDoSlice';
import { useState } from 'react';

export const Todo = ({ text, counter, likes, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handelCheng = event => {
    setQuery(event.target.value);
  };

  const handelEdite = () => {
    setIsEdit(true);
  };
  const handelSave = () => {
    setIsEdit(false);
    dispatch(editeToDo({ id, query }));
  };
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>
          {isEdit ? (
            <InputEdit defaultValue={text} onChange={handelCheng}></InputEdit>
          ) : (
            text
          )}
        </Text>
        {isEdit ? (
          <EditButton onClick={handelSave}>
            <AiFillSave size={24}></AiFillSave>
          </EditButton>
        ) : (
          <EditButton onClick={handelEdite}>
            <AiFillEdit size={24}></AiFillEdit>
          </EditButton>
        )}
        <Text>
          {likes}
          <LikeButton onClick={() => dispatch(incrementLike(id))}>
            <AiFillLike size={24} />
          </LikeButton>
          <LikeButton onClick={() => dispatch(decrementLike(id))}>
            <AiFillDislike size={24} />
          </LikeButton>
        </Text>
        <DeleteButton type="button" onClick={() => dispatch(deleteToDo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
