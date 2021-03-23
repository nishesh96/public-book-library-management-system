import { React } from "react";

function Book(bookDetails, handleEdit) {
  //   console.log(book);
  const { id, name, description, count, author } = bookDetails;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{count}</td>
      <td>{author}</td>
      {handleEdit && (
        <td>
          <button onClick={() => handleEdit(bookDetails)}>Edit</button>
        </td>
      )}
    </tr>
  );
}

export default Book;
