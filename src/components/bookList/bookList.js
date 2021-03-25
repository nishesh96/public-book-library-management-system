import { React, useEffect } from "react";
import Book from "../book";
import "./style.css";
function BookList({ bookList, handleEdit }) {
  return (
    <div className="bookList">
      <h2 align="center"> Book Shelf</h2>
      <table id="bookTable">
        <colgroup>
          <col span="1" style={{ width: "30%" }} />
          <col span="1" style={{ width: "25%" }} />
          <col span="1" style={{ width: "20%" }} />
        </colgroup>
        <tr>
          <th>BSN</th>
          <th>Name</th>
          <th>Description</th>
          <th>Count</th>
          <th>Author</th>
          {handleEdit && <th>Options</th>}
        </tr>
        {bookList.map((bookDetails) => Book(bookDetails, handleEdit))}
      </table>
    </div>
  );
}

export default BookList;
