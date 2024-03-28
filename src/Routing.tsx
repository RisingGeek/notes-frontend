import CreateNewNote from 'pages/CreateNewNote';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/create-note" Component={CreateNewNote} />
    </Routes>
  )
}

export default Routing;
