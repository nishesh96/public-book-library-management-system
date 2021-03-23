import { React, useState, useRef } from "react";
import "./style.css";

function AddBookModal({ modalOpen, setModalOpen, handleSubmit }) {
  const onClose = (e) => {
    setModalOpen(false);
  };

  if (!modalOpen) {
    return null;
  }

  return (
    <div className="modal" id="modal">
      <h2>Add Book</h2>
      <div className="content">
        <form id="form" onSubmit={handleSubmit}>
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
        <button className="toggle-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

// export default AddBookModal
