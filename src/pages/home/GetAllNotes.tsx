import { Button, Card, Flex } from "antd";
import { getAllNotesApi } from "apis/notes.api";
import { INote } from "interfaces/notes.type";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

function GetAllNotes() {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    (async function () {
      const { data } = await getAllNotesApi();
      setNotes(data);

    })();
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>View All Your Notes Here</h1>
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
                <Button type="text">
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
