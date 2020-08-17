import React from 'react';

const GetChat = props => {
  return (
    <div className='GetChat'>
      <div className='chat-block'>
        <p className='chat-head'>
          <span className='chat-author'>{props.author}</span>
          <span className='chat-date'>{props.date}</span>
        </p>
        <p className='chat-body'>{props.message}</p>
      </div>
    </div>
  );
};

export default GetChat;