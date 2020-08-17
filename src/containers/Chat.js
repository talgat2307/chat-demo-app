import React, { useEffect, useState } from 'react';
import PostChat from '../components/PostChat';
import GetChat from '../components/GetChat';

const Chat = () => {

  const [message, setMessage] = useState({
    author: '',
    message: '',
  });

  const [posts, setPosts] = useState([]);

  const handleAuthorChange = (e) => {
    const copyMessage = { ...message };
    copyMessage.author = e.target.value;
    setMessage(copyMessage);
  };

  const handleMessageChange = (e) => {
    const copyMessage = { ...message };
    copyMessage.message = e.target.value;
    setMessage(copyMessage);
  };


  const postData = async (e) => {
    e.preventDefault();
    const url = 'http://146.185.154.90:8000/messages';
    const data = new URLSearchParams();
    data.set('author', message.author);
    data.set('message', message.message);
    const response = await fetch(url, {
      method: 'post',
      body: data,
    });
    setMessage({
      author: '',
      message: '',
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchData = async () => {
        const response = await fetch(' http://146.185.154.90:8000/messages');

        if (response.ok) {
          const posts = await response.json();
          setPosts(posts);
        }
      };

      fetchData().catch(console.error);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PostChat
        post={(e) => postData(e)}
        handleAuthorChange={(e) => handleAuthorChange(e)}
        handleMessageChange={(e) => handleMessageChange(e)}
        author={message.author}
        message={message.message}
      />
      {posts.slice().reverse().map(post => {
        return <GetChat
          key={post._id}
          author={post.author}
          date={post.datetime}
          message={post.message}
        />;
      })}
    </>
  );
};

export default Chat;