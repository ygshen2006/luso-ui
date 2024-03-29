import { useEffect, useRef } from 'react';
import './style.css';
const PostView = ({ post }) => {
  const content = useRef();
  useEffect(() => {
    content.current.innerHTML = post.content;
  }, [post]);
  return (
    <>
      <div className="container py-5 text-center" style={{ marginTop: '10px' }}>
        <div className="post-body">
          <h2 className="title">《{post.title}》</h2>
          <div className="created-time">发表于 {post['created-time']}</div>
          {/* <div className="cover">
            <img src={post['cover-image']} />
          </div> */}

          <div className="content" ref={content}></div>
        </div>
      </div>
    </>
  );
};

export default PostView;
