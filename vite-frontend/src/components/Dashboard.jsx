import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './Note';
import CreateArea from './CreateArea';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userCreated, setUserCreated] = useState(false);

  const fetchNotes = async () => {
    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const response = await axios.get('http://127.0.0.1:3000/notes/notes', {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        });
        setNotes(response.data);
      } catch (err) {
        setError('Error fetching notes.');
      }
    } else {
      setError('No access token found.');
    }
    setLoading(false);
  };

  const handleDelete = async (note_id) => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      console.error('No access token found.');
      return;
    }

    try {
      await axios.delete(`http://127.0.0.1:3000/notes/note/${note_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      setNotes((prevNotes) => prevNotes.filter((note) => note.note_id !== note_id));
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  const handleUpdate = async (note_id, updatedNote) => {
    console.log(updatedNote);
    const token = localStorage.getItem('access_token');
    if (!token) {
      console.error('No access token found.');
      return;
    }

    try {
      await axios.put(
        `http://127.0.0.1:3000/notes/note/${note_id}`,
        updatedNote,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.note_id === note_id ? { ...note, ...updatedNote } : note
        )
      );
    } catch (err) {
      console.error('Error updating note:', err);
    }
  };

  const handleNoteCreated = () => {
    fetchNotes(); // Re-fetch notes after a new one is created
  };

  useEffect(() => {
    const userCreatedFlag = sessionStorage.getItem('user_created');
    setUserCreated(userCreatedFlag === 'true');

    fetchNotes();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem('access_token');
          sessionStorage.removeItem('user_created');
          window.location.reload();
        }}
      >
        Logout
      </button>
      <h2>Notes</h2>

      <CreateArea onNoteCreated={handleNoteCreated} />

      <div>
        {notes.length === 0 ? (
          <p>No notes available.</p>
        ) : (
          notes
            .filter((note) => note && note.note_id)
            .map((note) => (
              <Note
                key={note.note_id}
                id={note.note_id}
                title={note.title}
                content={note.description}
                onDelete={() => handleDelete(note.note_id)}
                onUpdate={handleUpdate}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
