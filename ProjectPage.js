import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import './ProjectPage.css';

function ProjectPage() {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', image: null, content: '' });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    axios.get('/board')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

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

  return (
    <div>
      <Header />
      <main>
        <button onClick={() => setModalOpen(true)}>게시물 생성</button>
        <div className="posts">
          {posts.map((post, index) => (
            <div key={post._id} className="post">
              <h3>{post.title}</h3>
              {post.image && <img src={post.image} alt={post.title} />}
              <p>{post.content}</p>
              <button onClick={() => handleEditPost(index)}>수정</button>
              <button onClick={() => handleDeletePost(index)}>삭제</button>
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
    </div>
  );
}

export default ProjectPage;
