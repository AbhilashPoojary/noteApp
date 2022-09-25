import React from "react";

export default function NotesComponent({ noteData }) {
  return (
    <section>
      <h5 className='mt-3'>Available notes</h5>
      <div className='row'>
        {noteData?.map((item) => {
          return (
            <div className='col-4' key={item.title}>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <hr />
                  <div className='card-tag'>
                    {item.tags.map((tag) => {
                      return (
                        <span className='note-tags' key={tag}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <hr />
                  <p className='card-text'>{item.description}</p>
                  <span className='note-date'>19-aug-2022</span>
                  <hr />
                  <button className='btn'>Edit</button>
                  <button className='btn btn-danger'>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
