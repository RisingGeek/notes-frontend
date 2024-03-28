import { Button, Input, message } from "antd";
import { createNewNoteApi, updateNoteById } from "apis/notes.api";
import { INote } from "interfaces/notes.type";
import Tiptap from "modules/tiptap/Tiptap";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./create-note.module.css";

interface ICreateNoteProps {
  defaultNote?: INote;
}

// Creates/Updates a note
function CreateNote(props: ICreateNoteProps) {
  const { defaultNote } = props;
  const [title, setTitle] = useState(defaultNote?.title || "");
  const [description, setDescription] = useState(defaultNote?.note || "");
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async () => {
    // If defaultNote is present, update the note
    if (defaultNote) {
      await updateNoteById({ _id: defaultNote._id, title, note: description });
      messageApi.success("Note Updated Successfully!", 5);
      return;
    }

    // Create a new note
    await createNewNoteApi(title, description);
    messageApi.success("Note Created Successfully!", 5);
  }

  return (
    <div className={styles.create_note_container}>
      <Button type="primary">
        <Link to="/">View All Notes</Link>
      </Button>
      {contextHolder}
      <Input
        placeholder="Note Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Tiptap setDescription={setDescription} defaultContent={defaultNote?.note} />
      <Button type="primary" onClick={handleSubmit}>{defaultNote ? "Update" : "Submit"}</Button>
    </div>
  );
}

export default CreateNote;