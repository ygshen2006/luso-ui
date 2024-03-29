import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { get } from "utils/api";
import { AdminConstants } from "utils/constants";

const PostCarousel = () => {
  const [posts, setPosts] = useState([]);

  const carouselStyle = {
    height: "20px",
    color: "white",
    lineHeight: "20px",
    textAlign: "center",
    background: "rgb(25, 178, 159)",
  };
  useEffect(() => {
    const fetchPosts = async () => {
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
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Carousel autoplay speed={50000} dots={false}>
        {posts.map((v, i) => {
          return (
            <div key={i}>
              <h5 style={carouselStyle}>
                <a style={{ color: "white" }} href={`/post/${v.id}`}>
                  {v.title}
                </a>
              </h5>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};
export default PostCarousel;
