import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import './ProjectPage.css'; // CSS 파일을 따로 작성하여 스타일 적용

function ProjectPage() {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', image: null, content: '' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/board');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleCreatePost = async () => {
    try {
      const formData = new FormData();
      formData.append('title', newPost.title);
      formData.append('image', newPost.image);
      formData.append('content', newPost.content);

      console.log('Form data:', formData);
      
      const response = await axios.post('/board', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPosts([response.data, ...posts]);
      setModalOpen(false);
      setNewPost({ title: '', image: null, content: '' });
    } catch (error) {
      console.error('Error creating post:', error.response?.data?.message || error.message);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await axios.delete(`/board/${id}`);
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error.response?.data?.message || error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setNewPost({ ...newPost, image: files[0] });
    } else {
      setNewPost({ ...newPost, [name]: value });
    }
  };

  return (
    <div id="page-wrapper">
      <Header />
      <button onClick={() => setModalOpen(true)} className="button large create-post-btn">CREATE NEW POST</button>
      <div id="main">
        <div id="postsContainer">
          {posts.map((post) => (
            <div key={post._id} className="post">
              <header>
                <div className="title">
                  <h2>{post.title}</h2>
                  <p className="post-content">{post.content}</p>
                </div>
              </header>
              <a href="#" className="image featured">
                <img src={post.image ? `/board/${post.image}` : ''} alt={post.title} /></a>
              <button onClick={() => handleDeletePost(post._id)}>삭제</button>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="modal" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <h2>Create a New Post</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleCreatePost(); }}>
              <input 
                type="text" 
                name="title" 
                placeholder="Title" 
                value={newPost.title} 
                onChange={handleInputChange} 
              /><br />
              <input 
                type="file" 
                name="image" 
                accept="image/*" 
                onChange={handleInputChange} 
              /><br />
              <textarea 
                name="content" 
                placeholder="Content" 
                value={newPost.content} 
                onChange={handleInputChange} 
              ></textarea><br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      <div id="footer">
        <div className="container">
          <div className="row">
            {/* Add your footer content here */}
            <section className="contact">
              <header>
                <h3>The Branches SNS</h3>
              </header>
              <ul className="icons">
                <li><a href="https://www.scnu.ac.kr/" target="_blank" className="icon solid fa-university"><span className="label">University Website</span></a></li>
                <li><a href="https://discord.gg/QMg4Dr9W" target="_blank" className="icon brands fa-discord"><span className="label">Discord</span></a></li>
                <li><a href="https://www.notion.so/ko-kr" target="_blank" className="icon solid fa-file-alt"><span className="label">Notion</span></a></li>
                <li><a href="https://github.com/" target="_blank" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;

