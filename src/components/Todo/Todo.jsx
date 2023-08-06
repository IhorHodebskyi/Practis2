import { RiDeleteBinLine } from 'react-icons/ri';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { Text } from 'components';
import { DeleteButton, LikeButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteToDo, incrementLike, decrementLike } from 'redux/ToDoSlice';

export const Todo = ({ text, counter, likes, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
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
