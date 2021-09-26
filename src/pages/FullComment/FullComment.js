import { useEffect, useState } from 'react';
import './FullComment.css';
import { getAllComments } from '../../services/getAllCommentsService';
import { getOneComment } from '../../services/getOneCommentService';
import { deleteComment } from '../../services/deleteCommentService';

const FullComment = ({ match, history }) => {
  const [comment, setComment] = useState('');
  const commentId = match.params.id;

  useEffect(async () => {
    if (commentId) {
      try {
        const response = await getOneComment(commentId);

        setComment(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [commentId]);

  const deleteCommentHandler = async () => {
    try {
      await deleteComment(commentId);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  let commentDetail = <p>Please select a comment</p>;

  if (commentId) commentDetail = <p>Loading... </p>;

  if (comment) {
    commentDetail = (
      <div className='fullComment'>
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={deleteCommentHandler}>Delete</button>
      </div>
    );
  }

  return (
    <>
      fullComment comp
      {commentDetail}
    </>
  );
};

export default FullComment;
