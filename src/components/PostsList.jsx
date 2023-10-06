import { useEffect, useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';

function PostsList({open, onClose}) {
  const [posts, setPosts] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const posts = await response.json();
      setPosts(posts.posts);
      setFetching(false);
    }
    fetchPosts();
  }, [])

  function addPostHandler(postData){
    fetch("http://localhost:8080/posts", {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {open && (
        <Modal onClose={onClose}>
          <NewPost
            onCancel={onClose}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
      {
        !fetching && posts.length > 0 && (
          <ul className={classes.posts}>
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </ul>
        )
      }
      {
        fetching && posts.length === 0 && (
          <p style={{textAlign: 'center'}}>Loading...</p>
        )
      }
    </>
  );
}

export default PostsList;
