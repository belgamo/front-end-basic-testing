import React, { useState } from "react";
import GenericToolbar from "../generic-toolbar-2/generic-toolbar.component";
import Slider from "@material-ui/core/Slider";

function Dashboard() {
  const [counter, setCounter] = useState({
    save: 0,
    delete: 0,
  });

  const onDelete = () =>
    setCounter((counter) => ({ ...counter, delete: counter.delete + 1 }));

  const onSave = () =>
    setCounter((counter) => ({ ...counter, save: counter.save + 1 }));

  return (
    <>
      <GenericToolbar onDelete={onDelete} onSave={onSave} />
      <h5>You've clicked on delete button {counter.delete} times!</h5>
      <h5>You've clicked on save button {counter.save} times!</h5>

      <Slider disabled defaultValue={30} />
    </>
  );
}

export default Dashboard;
