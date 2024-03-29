import { Avatar } from "antd";
import { FixedSizeList } from "react-window";
import "./style.css";
import "@ebay/skin";
import { EbayAlertDialog } from "@ebay/ui-core-react/ebay-alert-dialog";
import { EbayDialogHeader } from "@ebay/ui-core-react/ebay-dialog-base";

import { useEffect, useState } from "react";
import { EbayIcon } from "@ebay/ui-core-react/ebay-icon";
import { EbaySvg } from "@ebay/ui-core-react/ebay-svg";
import { EbayButton } from "@ebay/ui-core-react/ebay-button";
export const AdminPostsView = ({ posts, onDeletePost }) => {
  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);
  const [deletedId, setDeletedId] = useState(0);
  const deletePost = (id) => {
    setDeletedId(id);
    setConfirmDeleteVisible(true);
  };
  const navigateToEdit = (id) => {
    window.location.href = `/admin/post/edit/${id}`;
  };
  const renderRow = ({ index, style }) => {
    return (
      <div>
        <div style={{ ...style, ...{ display: "flex" } }}>
          <div className="first-column">
            <a href={`/post/${posts[index].id}`}>
              <Avatar size={40} src={posts[index]["cover-image"]} />
            </a>
          </div>
          <div>
            <div>
              <a>{posts[index].title}</a>
            </div>
            <div>
              <a style={{ fontSize: "12px", color: "grey" }}>
                {posts[index]["created-time"]}
              </a>
            </div>
          </div>

          <div title="删除" style={{ marginLeft: "300px" }}>
            <EbayButton
              size="small"
              onClick={() => navigateToEdit(posts[index].id)}
            >
              <EbayIcon
                name="ai-spectrum-filled16-colored"
                style={{
                  width: "20px",
                  height: "20px",
                }}
              ></EbayIcon>
            </EbayButton>
            <EbayButton
              priority="primary"
              variant="destructive"
              onClick={() => deletePost(posts[index].id)}
            >
              <EbayIcon
                name="delete16"
                style={{
                  width: "20px",
                  height: "20px",
                  cursor: "pointer",
                }}
              ></EbayIcon>
            </EbayButton>
          </div>
        </div>

        <EbaySvg />
      </div>
    );
  };
  return (
    <>
      <EbayAlertDialog
        open={confirmDeleteVisible}
        confirmText="删除"
        onConfirm={() => {
          setConfirmDeleteVisible(false);
          onDeletePost(deletedId);
        }}
        a11yClosetext="Close"
      >
        <EbayDialogHeader>确定要删除当前文章吗？</EbayDialogHeader>
        <p>删除后将不可见。</p>
      </EbayAlertDialog>
      <div className="list">
        <div className="summary">
          <Summary />
        </div>
        <FixedSizeList
          height={window.innerHeight}
          width={window.innerWidth - 100}
          itemCount={posts.length}
          itemSize={100}
        >
          {renderRow}
        </FixedSizeList>
      </div>
    </>
  );
};
export const Summary = ({ posts = [] }) => {
  const [latest, setLatest] = useState({});
  useEffect(() => {
    if (Array.isArray(posts)) {
      posts.sort((a, b) => {
        return new Date(b["created-time"]) - new Date(a["created-time"]);
      });
      setLatest(posts[0]);
    }
  }, []);
  const nav = () => {
    window.location.href = "/admin/post/edit";
  };
  return (
    <div className="header-top bg-light">
      <h6>
        当前共有{posts.length}文章, 最近一篇文章发表于:
        {latest ? latest["created-time"] : ""}
        <EbayButton
          onClick={nav}
          size="small"
          priority="primary"
          style={{ marginLeft: "10px", float: "right" }}
        >
          新增
        </EbayButton>
      </h6>
    </div>
  );
};

AdminPostsView.Summary = Summary;
