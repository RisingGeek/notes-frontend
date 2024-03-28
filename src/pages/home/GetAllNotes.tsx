import { Button, Card, Flex, Skeleton, message } from "antd";
import { deleteNoteById, getAllNotesApi } from "apis/notes.api";
import { INote } from "interfaces/notes.type";
import DeleteNoteModal from "modules/DeleteNoteModal";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

function GetAllNotes() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [errorMessage, setErrorMessage] = useState("");
  const [noteId, setNoteId] = useState("");

  // Get all notes by id
  useEffect(() => {
    (async function () {
      try {
        const { data } = await getAllNotesApi();
        setNotes(data);
        setErrorMessage("");
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (errorMessage) {
      messageApi.error(errorMessage);
    }
  }, [errorMessage]);

  const handleOpenDeleteConfirmModal = (id: string) => {
    setNoteId(id);
  }

  const handleDeleteNote = async (id: string) => {
    await deleteNoteById(id);
    setNoteId("");
    message.success("Note Deleted Successfully!", 5);
    const updatedNotes = notes.filter((el) => el._id !== id);
    setNotes(updatedNotes);
  }

  const handleHideModal = () => {
    setNoteId("");
  }

  if (!errorMessage && !notes.length) {
    return <Skeleton />
  }

  return (
    <div className={styles.home_container}>
      {contextHolder}
      <h1 className={styles.heading}>View All Your Notes Here</h1>
      <DeleteNoteModal
        noteId={noteId}
        handleDeleteNote={handleDeleteNote}
        handleHideModal={handleHideModal}
      />
      <Flex>
        <Button type="primary" className={styles.new_note_btn}>
          <Link to="/create-note">
            Create a New Note
          </Link>
        </Button>
      </Flex>
      <Flex gap="large" wrap="wrap" justify="center">
        {
          notes.map((el) => (
            <Card title={el.title} className={styles.note_card} key={el._id}>
              <div dangerouslySetInnerHTML={{ __html: el.note }}></div>
              <Flex align="center">
                <Button type="text">
                  <Link to={`/edit/${el._id}`}>
                    <CiEdit color="#005cc5" size="1.5rem" />
                  </Link>
                </Button>
                <Button type="text" onClick={() => handleOpenDeleteConfirmModal(el._id)}>
                  <MdDelete color="#cb3837" size="1.5rem" />
                </Button>
              </Flex>
            </Card>
          ))
        }
      </Flex>
    </div>
  )
}

export default GetAllNotes;
