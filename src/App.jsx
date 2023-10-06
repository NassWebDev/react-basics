import { useState } from 'react';
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
  const [open, setOpen] = useState(false);

  function createPost() {
    setOpen(!open);
  }
  
  function onClose() {
    setOpen(false);
  }

  return (
    <>
      <MainHeader onCreatePost={createPost}/>
      <main>
        <PostsList open={open} onClose={onClose}/>
      </main>
    </>
  );
}

export default App;
