import React from "react";
import { getActionLabel } from "./generic-toolbar.helpers";

function GenericToolbar({ onDelete, onSave, entity, method }) {
  const deleteButton = Boolean(onDelete) && (
    <button onClick={onDelete}>Delete</button>
  );

  const saveButton = Boolean(onSave) && (
    <button onClick={onSave}>{getActionLabel(entity, method)}</button>
  );

  return (
    <div>
      {deleteButton}
      {saveButton}
    </div>
  );
}

export default GenericToolbar;
