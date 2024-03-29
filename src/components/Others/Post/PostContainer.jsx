import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "utils/api";
import { MainConstants } from "utils/constants";
import TopNav from "../Head/TopNav";
import PostView from "./PostView";
import { Skeleton } from "antd";

const PostContainer = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var fetchPost = async () => {
      setLoading(true);
      var result = await get(MainConstants.POST_URL, [
        {
          key: "useMock",
          value: "true",
        },
        {
          key: "id",
          value: id,
        },
      ]);
      setLoading(false);
      setPost(result);
    };
    fetchPost();
  }, []);

  return (
    <>
      <TopNav activeIndex="post" />
      {loading ? (
        <>
          <Skeleton avatar paragraph />
          <Skeleton avatar paragraph />
          <Skeleton avatar paragraph />
        </>
      ) : (
        <PostView post={post} />
      )}
    </>
  );
};
export default PostContainer;
