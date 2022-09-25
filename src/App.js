import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import CreatenotesPage from "./pages/CreatenotesPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import NotesPage from "./pages/NotesPage";
import Footer from "./components/Footer";

export default function App() {
  const [noteinput, setNoteinput] = useState({
    title: "",
    tags: [],
    description: "",
  });
  const [noteData, setnoteData] = useState([]);
  const addNotes = () => {
    setnoteData([...noteData, noteinput]);
    setNoteinput({ title: "", tags: [], description: "" });
  };
  console.log(noteData);

  return (
    <section className='container'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <NotesPage
              noteinput={noteinput}
              setNoteinput={setNoteinput}
              addNotes={addNotes}
              noteData={noteData}
            />
          }
        />
        <Route
          path='/create'
          element={
            <CreatenotesPage
              noteinput={noteinput}
              setNoteinput={setNoteinput}
              addNotes={addNotes}
              noteData={noteData}
              setnoteData={setnoteData}
            />
          }
        />
      </Routes>
      <Footer />
    </section>
  );
}
