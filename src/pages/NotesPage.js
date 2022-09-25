import React from "react";
import NotesComponent from "../components/NotesComponent";
import Sidebar from "../components/Sidebar";

export default function Allnotes({ noteData }) {
  return (
    <section className='ps-3 pe-3'>
      {/* <h1 className='text-center'>Welcome to notes</h1> */}
      <div className='row'>
        <div className='col-4'>
          <Sidebar />
        </div>
        <div className='col-8'>
          <NotesComponent noteData={noteData} />
        </div>
      </div>
    </section>
  );
}
