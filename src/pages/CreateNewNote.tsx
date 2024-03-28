import Tiptap from 'modules/tiptap/Tiptap';
import React, { useState } from 'react'

function CreateNewNote() {
  const [description, setDescription] = useState();
  return (
    <div>
      <Tiptap setDescription={setDescription} />
    </div>
  )
}

export default CreateNewNote;