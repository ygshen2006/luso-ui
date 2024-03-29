import { Form, Input, Upload, Modal } from 'antd';
import { useEffect, useState } from 'react';
import './style.css';
import { Editor } from '@tinymce/tinymce-react';
import { EbayButton } from '@ebay/ui-core-react/ebay-button';
import { EbayAlertDialog } from '@ebay/ui-core-react/ebay-alert-dialog';
import { EbayDialogHeader } from '@ebay/ui-core-react/ebay-dialog-base';

import '@ebay/skin';
import { useForm } from 'antd/es/form/Form';

const PostEditView = ({
  id,
  title = '',
  content = '',
  onSavePost,
  onUploadImage,
}) => {
  const onFinish = async () => {
    if (!editorValue) {
      setErrorDialogVisible(true);
      return;
    }
    setSaveDisabled(true);
    var result = await onSavePost(id, postTitle, 'todo', editorValue);
    if (result && result.id) {
      setSuccessDialogVisible(true);
      setSavedPost(result);
    }
  };

  const onFinishFailed = () => {
    setErrorDialogVisible(true);
  };
  const [postTitle, setPostTitle] = useState(title);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [, setCoverImageBase64] = useState('');
  const [editorValue, setEditorContent] = useState(content);
  const [fileList, setFileList] = useState([]);
  const [errorDialogVisible, setErrorDialogVisible] = useState(false);
  const [successDialogVisible, setSuccessDialogVisible] = useState(false);
  const [savedPost, setSavedPost] = useState({});
  function handleCancel() {
    setPreviewVisible(false);
  }

  function handlePreview(file) {
    setPreviewImage(file.thumbUrl);
    setPreviewVisible(true);
  }

  function handleChange({ fileList: newFileList }) {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      getBase64(newFileList[0].originFileObj).then((data) => {
        setCoverImageBase64(data);
      });
    }
  }

  function handleTitleChange(e) {
    setPostTitle(e.target.value);
  }
  function handleEditorChange(content) {
    setEditorContent(content);
  }

  const [saveDisabled, setSaveDisabled] = useState(false);
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  var [form] = useForm();
  useEffect(() => {
    if (id) {
      setPostTitle(title);
      form.setFieldValue('title', title);
      setEditorContent(content);
    }
  }, [id]);
  return (
    <div className="container py-5 text-center">
      <EbayAlertDialog
        open={errorDialogVisible}
        confirmText="去补充"
        onConfirm={() => {
          setErrorDialogVisible(false);
        }}
        a11yClosetext="Close"
      >
        <EbayDialogHeader>请输入完整字段</EbayDialogHeader>
        <p>所有字段均为必填项</p>
      </EbayAlertDialog>

      <EbayAlertDialog
        open={successDialogVisible}
        confirmText="跳转到文章列表"
        onConfirm={() => {
          window.location.href = `/post/${savedPost.id}`;
        }}
        a11yClosetext="Close"
      >
        <EbayDialogHeader>保存成功🎉</EbayDialogHeader>
        <p>保存成功，点击到文章列表查看所有文章。</p>
      </EbayAlertDialog>
      <Form
        className="post-form"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <div>
          <Form.Item
            label="标题"
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input your title!',
              },
            ]}
          >
            <Input
              value={postTitle}
              onChange={handleTitleChange}
              placeHolder="请输入文章标题..."
            />
          </Form.Item>
        </div>

        <div style={{ display: 'none' }}>
          <Form.Item label="封面" name="cover">
            <div className="cover">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList.length < 1 && '+ 上传封面'}
              </Upload>
              <Modal
                visible={previewVisible}
                title="Preview"
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="Preview"
                  style={{ width: '100%' }}
                  src={previewImage}
                />
              </Modal>
            </div>
          </Form.Item>
        </div>

        <div>
          <Editor
            value={editorValue}
            apiKey="2jhvkjrvlnoj8ak334n2tzi6n3ltegj0pl128h3lhd0s4bpo"
            initialValue="<p>This is the initial content of the editor</p>"
            init={{
              language: 'zh-Hans',
              language_url: '../../../zh-Hans.js',
              menubar: true,
              height: 500,
              images_upload_handler: onUploadImage,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
                'image',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help | \
            image',
            }}
            onEditorChange={handleEditorChange}
          />
        </div>

        <div className="saveBtn">
          <EbayButton
            disabled={saveDisabled}
            htmlType="submit"
            priority="primary"
          >
            保存
          </EbayButton>
        </div>
      </Form>
    </div>
  );
};

export default PostEditView;
