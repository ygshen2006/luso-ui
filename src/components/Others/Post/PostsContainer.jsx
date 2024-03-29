import { FixedSizeList } from "react-window";
import PostView from "./PostView";
import { useEffect, useState } from "react";
import { get } from "utils/api";
import { AdminConstants } from "utils/constants";
import TopNav from "../Head/TopNav";
import { Skeleton } from "antd";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await get(AdminConstants.POSTS_URI, [
        {
          key: "useMock",
          value: "true",
        },
      ]);

      result.sort((a, b) => {
        return new Date(b["created-time"]) - new Date(a["created-time"]);
      });
      setPosts(result);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const renderRow = ({ index }) => {
    return <PostView post={posts[index]} />;
  };
  return (
    <div>
      <TopNav activeIndex="post" />
      {loading ? (
        <div>
          <Skeleton avatar paragraph />
          <Skeleton avatar paragraph />
          <Skeleton avatar paragraph />
        </div>
      ) : (
        <>
          {" "}
          <FixedSizeList
            height={window.innerHeight}
            width={window.innerWidth}
            itemCount={posts.length}
            itemSize={1}
          >
            {renderRow}
          </FixedSizeList>
        </>
      )}
    </div>
  );
};

export default Posts;
