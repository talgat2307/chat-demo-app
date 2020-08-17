import React from 'react';

const PostChat = props => {
  return (
    <div className=''>
      <form className='form'>
        <div className='input-block'>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id='author'
            value={props.author}
            onChange={props.handleAuthorChange}
          />
        </div>
        <div className='input-block'>
          <label htmlFor="message">Message:</label>
          <input
            className='message'
            type="text"
            id='message'
            value={props.message}
            onChange={props.handleMessageChange}
          />
        </div>
        <button className='btn' onClick={props.post}>Post</button>
      </form>
    </div>
  );
};

export default PostChat;