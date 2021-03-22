import { React } from 'react';




function Book({ id, name, description, count, author }) {
    return <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{count}</td>
        <td>{author}</td>
    </tr>
}

export default Book;


