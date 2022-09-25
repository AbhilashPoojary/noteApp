import React from "react";

export default function Createnotes({
  noteinput,
  setNoteinput,
  addNotes,
  noteData,
  setnoteData,
}) {
  const addTags = (event) => {
    if (event.target.value !== "") {
      const tagText =
        event.target.value.charAt(0).toUpperCase() +
        event.target.value.slice(1);
      setNoteinput({ ...noteinput, tags: [...noteinput.tags, tagText] });
      event.target.value = "";
    }
  };
  const removeTag = (indexToRemove) => {
    const updatedTags = noteinput.tags.filter(
      (item, index) => item[index] !== item[indexToRemove]
    );
    setNoteinput({
      ...noteinput,
      tags: [...updatedTags],
    });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNoteinput({ ...noteinput, [name]: value });
  };

  const addNote = (e) => {
    e.preventDefault();
    console.log(e);
    addNotes();
  };

  const addDummy = () => {
    setnoteData([
      ...noteData,
      {
        title: "My first note",
        tags: ["Note", "Firstnote"],
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
      {
        title: "My Second note",
        tags: ["Note", "Firstnote"],
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
      {
        title: "Dummy note",
        tags: ["Note", "Firstnote"],
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      },
    ]);
  };

  return (
    <section className='mt-2'>
      <h1 className='text-center'>Create your notes</h1>
      <form
        onSubmit={addNote}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      >
        <div className='d-flex title-tag'>
          <div className='form-group w-50 me-3'>
            <label htmlFor='title' className='form-label'>
              Title
            </label>
            <input
              type='text'
              className='form-control mb-2 '
              name='title'
              placeholder='Notes Title'
              value={noteinput.title}
              onChange={handleChange}
            />
          </div>
          <div className='form-group w-50'>
            <label htmlFor='tags' className='form-label'>
              Tags
            </label>
            <div className='tags-input mb-2'>
              <ul id='tags'>
                {noteinput.tags.map((tag, index) => (
                  <li key={index} className='tag'>
                    <span className='tag-title'>{tag}</span>
                    <span
                      className='tag-close-icon'
                      onClick={() => removeTag(index)}
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
              <input
                type='text'
                className='form-control'
                placeholder='tags (press enter to add tags)'
                onKeyUp={(event) =>
                  event.key === "Enter" ? addTags(event) : null
                }
                name='tags'
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='description' className='form-label'>
            Notes Description
          </label>
          <textarea
            className='form-control mb-2'
            name='description'
            rows='3'
            value={noteinput.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>
          submit
        </button>
        <button className='btn btn-warning' onClick={addDummy}>
          add dummy data
        </button>
      </form>
    </section>
  );
}
