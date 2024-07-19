import React, { useState } from 'react';
import Header from './Header';
import './ProjectPage.css'; // CSS 파일을 따로 작성하여 스타일 적용

function ProjectPage() {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', image: null, content: '' });
  const [viewPost, setViewPost] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const handleCreatePost = () => {
    const reader = new FileReader();
    reader.onload = () => {
      setPosts([...posts, { ...newPost, image: reader.result }]);
      setNewPost({ title: '', image: null, content: '' });
      setModalOpen(false);
    };
    if (newPost.image) {
      reader.readAsDataURL(newPost.image);
    }
  };

  const handleEditPost = (index) => {
    setNewPost(posts[index]);
    setEditIndex(index);
    setModalOpen(true);
  };

  const handleUpdatePost = () => {
    const updatedPosts = posts.map((post, index) =>
      index === editIndex ? newPost : post
    );
    setPosts(updatedPosts);
    setNewPost({ title: '', image: null, content: '' });
    setEditIndex(null);
    setModalOpen(false);
  };

  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setNewPost({
      ...newPost,
      [name]: files ? files[0] : value,
    });
  };

  const handleViewPost = (post) => {
    setViewPost(post);
  };

  return (
    <div>
      <Header />
      <main className="project-main"> {/* 프로젝트 페이지의 메인 영역을 중앙 정렬 */}
        <button className="create-post-btn" onClick={() => setModalOpen(true)}>게시물 생성</button>
        <div className="posts">
          {posts.map((post, index) => (
            <div key={index} className="post" onClick={() => handleViewPost(post)}>
              {post.image && <img src={post.image} alt={post.title} />}
              <div className="overlay">
                <h3>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{editIndex === null ? '게시물 생성' : '게시물 수정'}</h2>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              placeholder="제목"
            />
            <input
              type="file"
              name="image"
              onChange={handleInputChange}
            />
            <textarea
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              placeholder="내용"
            ></textarea>
            <button onClick={editIndex === null ? handleCreatePost : handleUpdatePost}>
              {editIndex === null ? '생성' : '수정'}
            </button>
            <button onClick={() => setModalOpen(false)}>취소</button>
          </div>
        </div>
      )}

      {viewPost && (
        <div className="modal" onClick={() => setViewPost(null)}>
          <div className="modal-content">
            <h2>{viewPost.title}</h2>
            {viewPost.image && <img src={viewPost.image} alt={viewPost.title} />}
            <p>{viewPost.content}</p>
            <button onClick={() => setViewPost(null)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;

