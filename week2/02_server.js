const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = 'YOUR_MONGODB_CONNECTION_STRING';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const photoSchema = new mongoose.Schema({
  title: String,
  url: String,
});
const Photo = mongoose.model('Photo', photoSchema);

// Get all photos
app.get('/photos', async (req, res) => {
  const photos = await Photo.find();
  res.json(photos);
});

// Add new photo
app.post('/photos', async (req, res) => {
  const { title, url } = req.body;
  const newPhoto = new Photo({ title, url });
  await newPhoto.save();
  res.json(newPhoto);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
