import React, { useState } from 'react';
import axios from 'axios';

const CreateArea = ({ onNoteCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('access_token');
    if (!token) {
      console.error('No access token found.');
      return;
    }

    if (!title.trim() && !description.trim()) {
      alert('Title or description required.');
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:3000/notes/note',
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      // Ensure note_id exists in response
      if (response.data && response.data.note_id) {
        onNoteCreated(response.data);
        setTitle('');
        setDescription('');
      } else {
        console.error('Invalid note created response:', response.data);
      }
    } catch (err) {
      console.error('Error creating note:', err);
    }
  };

  return (
    <div>
      <h3>Create a Note</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
};

export default CreateArea;
