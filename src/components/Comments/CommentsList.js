import { useEffect, useState } from 'react';
import Comment from './Comment/Comment';
import './Comments.css';
import { toast } from 'react-toastify';
import { getAllComments } from '../../services/getAllCommentsService';
import { addNewComment } from '../../services/addNewCommentService';
import { Link } from 'react-router-dom';

const CommentsList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const { data } = await getAllComments();
      setComments(data);
    } catch (error) {
      console.log(error);
      setError(true);
      toast.error('There is an error!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };



  const postCommentHandler = async (comment) => {
    try {
      await addNewComment(comment);
      // setComments([...comments, res.data]);

      const res = await getAllComments();
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderComments = () => {
    let toBeRendered = <p>Loading...</p>;
    if (error) {
      toBeRendered = <p>Loading failed</p>;
    }
    if (!error && comments) {
      toBeRendered = comments.map((comment) => {
        return (
          <Link to={`/comment/${comment.id}`} key={comment.id}>
            <Comment
              name={comment.name}
              email={comment.email}
            />
          </Link>
        );
      });
    }

    return toBeRendered;
  };

  return (
    <main className='main'>
      <section>{renderComments()}</section>
    </main>
  );
};

export default CommentsList;
