import { React } from 'react'
import { useHistory } from 'react-router-dom';
import "./style.css";



// const header = {
//     padding: "5px 10px",
//     backgroundColor: "green",
//     display: "flex",
//     alignItems: "center"
// }


function Header({ handleModal }) {
    const history = useHistory();
    return <div className="topnav">
        <div className="title">
            <h2>Public Library</h2>
        </div>
        <div className="actionButton">
            <button onClick={handleModal}>Add Book</button>
            <button onClick={() => history.push('/all-books')}> View All Books </button>
        </div>
    </div>
}

export default Header;