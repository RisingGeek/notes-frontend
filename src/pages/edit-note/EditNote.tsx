import { Skeleton } from "antd";
import { getNoteById } from "apis/notes.api";
import { INote } from "interfaces/notes.type";
import CreateNote from "pages/create-note/CreateNote";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditNote() {
  const { id } = useParams();
  const [note, setNote] = useState<INote>();

  // Get the note by id
  useEffect(() => {
    (async function () {
      if (!id) {
        return;
      }
      const { data } = await getNoteById(id);
      setNote(data);
    })();
  }, []);

  if (!note) {
    return <Skeleton />
  }

  return (
    <CreateNote defaultNote={note} />
  )
}

export default EditNote;