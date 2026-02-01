import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const res = await axios.get('http://localhost:5000/photos');
      setPhotos(res.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const addPhoto = async (e) => {
    e.preventDefault();
    if (!title || !url) return alert('Fill both fields');
    try {
      const res = await axios.post('http://localhost:5000/photos', { title, url });
      setPhotos([...photos, res.data]);
      setTitle('');
      setUrl('');
    } catch (error) {
      console.error('Error adding photo:', error);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
      <h1>Public Photo Gallery</h1>

      <form onSubmit={addPhoto} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Photo Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <button type="submit">Add Photo</button>
      </form>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {photos.map(photo => (
          <div key={photo._id} style={{ width: '200px' }}>
            <img
              src={photo.url}
              alt={photo.title}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
