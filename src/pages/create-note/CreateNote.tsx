import { Button, Input, message } from "antd";
import { createNewNoteApi } from "apis/notes.api";
import Tiptap from 'modules/tiptap/Tiptap';
import { useState } from 'react';
import styles from "./create-note.module.css";

function CreateNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async () => {
    await createNewNoteApi(title, description);
    messageApi.success("Note Created Successfully!", 5)
  }

  return (
    <div className={styles.create_note_container}>
      {contextHolder}
      <Input
        placeholder="Note Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Tiptap setDescription={setDescription} />
      <Button type="primary" onClick={handleSubmit}>Submit</Button>
    </div>
  );
}

export default CreateNewNote;