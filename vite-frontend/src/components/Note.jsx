import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({ id, title, content, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    onUpdate(id, {
      title: updatedTitle,
      description: updatedContent,
    });
    setIsEditing(false);
  };

  return (
    <div className="note space-between" role="article" aria-label={`Note titled ${title}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            aria-label="Edit title"
          />
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            aria-label="Edit description"
          />
          <button onClick={handleUpdateClick} type="button">
            Update
          </button>
        </>
      ) : (
        <>
          <div>
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
          <div>
            <button
              onClick={handleEditClick}
              aria-label={`Edit note titled ${title}`}
              type="button"
              className="edit-button"
              style={{ marginRight: "5px" }}
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
              aria-label={`Delete note titled ${title}`}
              type="button"
              className="delete-button"
            >
              <DeleteIcon />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
