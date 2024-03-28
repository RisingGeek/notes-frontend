import { Button, Card, Flex, message } from "antd";
import { deleteNoteById, getAllNotesApi } from "apis/notes.api";
import { INote } from "interfaces/notes.type";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

function GetAllNotes() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    (async function () {
      const { data } = await getAllNotesApi();
      setNotes(data);

    })();
  }, []);

  const handleDeleteNote = async (id: string) => {
    await deleteNoteById(id);
    messageApi.success("Note Deleted Successfully!", 5);
    const updatedNotes = notes.filter((el) => el._id !== id);
    setNotes(updatedNotes);
  }

  return (
    <div className={styles.home_container}>
      {contextHolder}
      <h1 className={styles.heading}>View All Your Notes Here</h1>
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
            <Card title={el.title} className={styles.note_card}>
              <div dangerouslySetInnerHTML={{ __html: el.note }}></div>
              <Flex align="center">
                <Button type="text">
                  <Link to={`/edit/${el._id}`}>
                    <CiEdit color="#005cc5" size="1.5rem" />
                  </Link>
                </Button>
                <Button type="text" onClick={() => handleDeleteNote(el._id)}>
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
