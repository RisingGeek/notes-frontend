import { Modal } from 'antd';

interface IDeleteNoteModal {
  noteId: string;
  handleDeleteNote: (id: string) => void;
  handleHideModal: () => void;
}

function DeleteNoteModal(props: IDeleteNoteModal) {
  const { noteId, handleDeleteNote, handleHideModal } = props;



  return (
    <Modal
      title="Confirm Delete Note?"
      open={Boolean(noteId)}
      onOk={() => handleDeleteNote(noteId)}
      onCancel={handleHideModal}
    >
    </Modal>
  )
}

export default DeleteNoteModal;
