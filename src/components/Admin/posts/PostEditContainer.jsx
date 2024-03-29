import PostEditView from "./PostEditView";
import { save } from "utils/api";
import { AdminConstants, REMOTE_URL } from "utils/constants";
import TopNav from "components/Others/Head/TopNav";
import usePostEdit from "./PostEditHook";

const PostEditContainer = () => {
  const { post } = usePostEdit();

  const savePost = async (id, title, coverImage, content) => {
    var body = {
      title,
      "cover-image": "todo",
      content,
    };
    if (id) {
      body.id = id;
    }
    var result = await save(
      !id ? AdminConstants.POST_SAVE_URI : AdminConstants.POST_UPDATE_URI,
      [
        {
          key: "useMock",
          value: "true",
        },
      ],
      body,
    );

    return result;
  };

  const uploadImage = (blobInfo, progress) =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open(
        "POST",
        `${
          REMOTE_URL + AdminConstants.POST_UPLOAD_IMAGE
        }?fileName=${new Date().getTime()}.jpeg`,
      );

      xhr.setRequestHeader(
        "luso_token",
        "c6c54ce4-dc21-4e87-bdab-482dc6f0c96b",
      );

      xhr.upload.onprogress = () => {};

      xhr.onload = () => {
        if (xhr.status === 403) {
          reject({ message: "HTTP Error: " + xhr.status, remove: true });
          return;
        }

        if (xhr.status < 200 || xhr.status >= 300) {
          reject("HTTP Error: " + xhr.status);
          return;
        }

        const json = JSON.parse(xhr.responseText);

        if (!json || typeof json.thumbUrl != "string") {
          reject("Invalid JSON: " + xhr.responseText);
          return;
        }

        progress(json.thumbUrl);
        resolve();
      };

      xhr.onerror = () => {
        reject(
          "Image upload failed due to a XHR Transport error. Code: " +
            xhr.status,
        );
      };

      const formData = new FormData();
      formData.append("file", blobInfo.blob());

      xhr.send(formData);
    });
  return (
    <>
      <TopNav activeIndex="post" />
      <PostEditView
        {...post}
        onSavePost={savePost}
        onUploadImage={uploadImage}
      />
    </>
  );
};

export default PostEditContainer;
