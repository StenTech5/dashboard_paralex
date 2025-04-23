import { useState } from 'react';
import { FaCog, FaFileAlt, FaBullhorn, FaPaperclip } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

export default function PostNewsForm() {
  const [selectedCategory, setSelectedCategory] = useState('Legal News');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const categories = [
    { name: 'Legal News', icon: <FaFileAlt className="icon red" /> },
    { name: 'Announcement', icon: <FaBullhorn className="icon green" /> },
    { name: 'Press Release', icon: <FaPaperclip className="icon purple" /> },
  ];

  const handleCreate = () => {
    if (!title.trim() || !content.trim()) {
      toast.error('Post title and content are required');
      return;
    }

    toast.success(`News post created under '${selectedCategory}' category!`);
    setTitle('');
    setContent('');
    setImage(null);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      toast.success('Image uploaded successfully');
    }
  };

  return (
    <div className="post-container">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <h2 className="post-title">Post News</h2>
      <div className="post-wrapper">

        {/* Left Section */}
        <div className="post-left">
          <div className="form-group">
            <label>Post title</label>
            <input
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Post Contents</label>
            <textarea
              placeholder="Enter post content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <div className="btn-group">
            <button className="btn cancel" onClick={() => { setTitle(''); setContent(''); }}>Cancel</button>
            <button className="btn create" onClick={handleCreate}>Create</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="post-right">
          <div className="categories-card">
            <h3><FaCog className="gear" /> Categories</h3>
            <div className="categories-list">
              {categories.map(cat => (
                <div key={cat.name} className="category-item">
                  <div className="category-info">
                    <div className="icon-box">{cat.icon}</div>
                    <span>{cat.name}</span>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={selectedCategory === cat.name}
                      onChange={() => setSelectedCategory(cat.name)}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="upload-card">
            <h3>Post Image</h3>
            <div className="upload-box">
              <input type="file" accept="image/*" id="imageUpload" onChange={handleFileChange} />
              <label htmlFor="imageUpload">
                <div className="upload-icon">⬆️</div>
                <p>Drop files here</p>
                <p className="hint">Supported format: PNG, JPG</p>
              </label>
              {image && <p className="selected-file">Selected: {image.name}</p>}
            </div>
            <div className="btn-group">
              <button className="btn cancel" onClick={() => setImage(null)}>Cancel</button>
              <label htmlFor="imageUpload">
                <span className="btn upload">Upload</span>
              </label>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
