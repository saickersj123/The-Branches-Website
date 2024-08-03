import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import './ProjectPage.css'; // CSS 파일을 따로 작성하여 스타일 적용

function ProjectPage() {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', image: null, content: '' });
  const [selectedPost, setSelectedPost] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    document.getElementById('create-post-button').scrollIntoView();
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    axios.get('/board')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  };

  const handleCreatePost = () => {
    const formData = new FormData();
    formData.append('title', newPost.title);
    formData.append('image', newPost.image);
    formData.append('content', newPost.content);

    axios.post('/board', formData)
      .then(response => {
        setPosts([...posts, response.data]);
        setNewPost({ title: '', image: null, content: '' });
        setModalOpen(false);
      })
      .catch(error => {
        console.error('There was an error creating the post!', error);
      });
  };

  const handleEditPost = (index) => {
    setNewPost(posts[index]);
    setEditIndex(index);
    setModalOpen(true);
  };

  const handleUpdatePost = () => {
    const updatedPost = { ...newPost };
    const formData = new FormData();
    formData.append('title', updatedPost.title);
    if (updatedPost.image instanceof File) {
      formData.append('image', updatedPost.image);
    }
    formData.append('content', updatedPost.content);

    axios.put(`/board/${posts[editIndex]._id}`, formData)
      .then(response => {
        const updatedPosts = posts.map((post, index) =>
          index === editIndex ? response.data : post
        );
        setPosts(updatedPosts);
        setNewPost({ title: '', image: null, content: '' });
        setEditIndex(null);
        setModalOpen(false);
      })
      .catch(error => {
        console.error('There was an error updating the post!', error);
      });
  };

  const handleDeletePost = (index) => {
    const postId = posts[index]._id;
    axios.delete(`/board/${postId}`)
      .then(() => {
        const updatedPosts = posts.filter((_, i) => i !== index);
        setPosts(updatedPosts);
      })
      .catch(error => {
        console.error('There was an error deleting the post!', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setNewPost({
      ...newPost,
      [name]: files ? files[0] : value,
    });
  };

  const handleImageChange = e => {
    setNewPost({ ...newPost, image: e.target.files[0] });
  };

  const handlePostClick = index => {
    setSelectedPost(posts[index]);
  };

  const closePostModal = () => {
    setSelectedPost(null);
  };

  const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <div className="no-background">
      <Header />
      <div className="project-page">
        <button id="create-post-button" className="create-post-button" onClick={() => setModalOpen(true)}>게시물 생성</button>
        <div className="posts">
          {posts.length === 0 ? (
            <div className="no-posts-message">게시판을 이용해보세요!</div>
          ) : (
            posts.map((post, index) => (
              <div className="post" key={post._id} onClick={() => handlePostClick(index)}>
                <h2>{post.title}</h2>
                {post.image && <img src={post.image} alt={post.title} />}
                <p>
                  {truncateContent(post.content, 100)}
                  {post.content.length > 100 && <span className="read-more" onClick={() => handlePostClick(index)}> 더보기</span>}
                </p>
                <button onClick={(e) => {e.stopPropagation(); handleEditPost(index);}}>수정</button>
                <button onClick={(e) => {e.stopPropagation(); handleDeletePost(index);}}>삭제</button>
              </div>
            ))
          )}
        </div>
      </div>
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
            <input type="file" onChange={handleImageChange} />
            <textarea
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              placeholder="내용"
            />
            <button onClick={editIndex === null ? handleCreatePost : handleUpdatePost}>
              {editIndex === null ? '생성' : '수정'}
            </button>
            <button onClick={() => setModalOpen(false)}>취소</button>
          </div>
        </div>
      )}
      {selectedPost && (
        <div className="post-modal" onClick={closePostModal}>
          <div className="post-modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedPost.title}</h2>
            {selectedPost.image && <img src={selectedPost.image} alt={selectedPost.title} />}
            <p>{selectedPost.content}</p>
            <button onClick={closePostModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
