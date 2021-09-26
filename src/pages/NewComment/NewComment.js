import './NewComment.css';
import { useState } from 'react';
import { addNewComment } from '../../services/addNewCommentService';


const NewComment = ({ history }) => {
  const [comment, setComment] = useState({
    name: '',
    email: '',
    content: '',
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const addNewCommentHanlder = async() => {
    try {
      await addNewComment(comment);
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='newComment'>
      <div>
        <label>name</label>
        <input
          type='text'
          name='name'
          value={comment.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>email</label>
        <input
          type='text'
          name='email'
          value={comment.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>body</label>
        <textarea
          type='textarea'
          name='content'
          value={comment.content}
          onChange={changeHandler}
        />
      </div>
      <button onClick={addNewCommentHanlder}>Add</button>
    </div>
  );
};

export default NewComment;
