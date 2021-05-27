import React from "react";

function GenericToolbar({ onDelete, onSave }) {
  const deleteButton = Boolean(onDelete) && (
    <button onClick={onDelete}>Delete</button>
  );

  const saveButton = Boolean(onSave) && <button onClick={onSave}>Save</button>;

  return (
    <div>
      {deleteButton}
      {saveButton}
    </div>
  );
}

export default GenericToolbar;
