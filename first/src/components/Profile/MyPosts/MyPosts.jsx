import React from 'react';
import profile from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div> 
    <div>
      My post
        </div>
    <div>
      <textarea></textarea>
      <button>Add post</button>
        </div>
    
        <div className={profile.item}>
          <Post message='Hi, how are you?' likesCount="1,2k Likes" />
          <Post message="It's my first post" likesCount="836 Likes"/>
          
        <div className={profile.item}>
           Post2
        </div>
    </div>
  </div>
   
  
}

export default MyPosts