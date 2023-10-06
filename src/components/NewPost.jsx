import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({onCancel, onAddPost}) {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  function changeBodyHandler(event) {
      setText(event.target.value);
  }

  function changeAuthorHandler(event){
    setAuthor(event.target.value);
  }

  function onClose() {
    setOpen(!open);
  }

  function onSubmit(event) {
    event.preventDefault();
    const post = {
      text,
      author
    }
    console.log(post);
    onAddPost(post);
    onCancel()
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onClose}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;