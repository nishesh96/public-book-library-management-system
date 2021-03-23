import React, { useRef } from "react";

import "./style1.css";

const BookFormModal = ({ handleClose, show, handleSubmit, edit, formRef }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  // console.log("edit", edit);
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div id="modal">
          <h2>{!edit ? "Add Book" : "Edit Book"}</h2>
          <div className="content">
            <form ref={formRef} id="form" onSubmit={handleSubmit}>
              <div className="inputBox">
                <label for="name">Book name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="inputBox">
                <label for="desc">Description:</label>
                <textarea id="desc" name="desc" />
              </div>
              <div className="inputBox">
                <label for="author">Author:</label>
                <input type="text" id="author" name="author" />
              </div>
              <div className="inputBox">
                <label for="count">Count:</label>
                <input type="number" id="count" name="count" />
              </div>
            </form>
          </div>
          <div className="actions">
            <button form="form" className="toggle-button" type="submit">
              Submit
            </button>
            <button className="toggle-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookFormModal;
