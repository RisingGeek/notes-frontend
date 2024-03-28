import CreateNote from 'pages/create-note/CreateNote';
import EditNote from 'pages/edit-note/EditNote';
import GetAllNotes from 'pages/home/GetAllNotes';
import { Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route path="/" Component={GetAllNotes} />
      <Route path="/create-note" Component={CreateNote} />
      <Route path="/edit/:id" Component={EditNote} />
    </Routes>
  );
}

export default Routing;
