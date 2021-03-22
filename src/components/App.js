import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import mockdata from '../mockdata.json';
import AddBookModal from './addBook/addBook';
import BookList from './bookList/bookList';
import Header from './header/header';
import SearchBar from './searchBar';
import BookFormModal from './bookFormModal/bookFormModal'
import * as actions from '../redux/actions';
import Container from './container/container';
import { filterBooks } from '../utils/helper';



function App() {

    const data = useSelector(state => state.items);
    const isFetching = useSelector(state => state.isFetching);
    const dispatch = useDispatch();


    const [bookList, setBookList] = useState([]);
    const [searchedBookList, setSearchedBookList] = useState([]);
    const [keyword, setKeyword] = useState();
    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(!modalOpen);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, desc, author, count } = e.target.elements;
        if (name.value.length > 2 || desc.value.length > 2 || author.value.length > 2 || count.value.length > 1) {
            dispatch(actions.addBook({
                "name": name.value,
                "description": desc.value,
                "count": count.value,
                "author": author.value
            }));
            setModalOpen(false);
            alert("Book Added")
        } else {
            alert("Enter all details");
        }
    };


    useEffect(() => {
        if (!isFetching) {
            const dataValues = Object.values(data);
            setBookList(dataValues);
        }
    }, [isFetching, data])

    useEffect(() => {
        dispatch(actions.getAllBooks());
    }, [])

    useEffect(() => {
        if (keyword) {
            const filteredBooklist = filterBooks(bookList, keyword);
            setSearchedBookList(filteredBooklist);
        }
        else {
            setSearchedBookList([]);
        }
    }, [keyword])


    return <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Container>
                        <Header handleModal={handleModal}></Header>
                        <SearchBar keyword={keyword} setKeyword={setKeyword}></SearchBar>
                        {keyword && (searchedBookList.length ? <BookList bookList={searchedBookList}></BookList> : <p align="center">No books found...</p>)}
                        <BookFormModal handleClose={handleModal} show={modalOpen} handleSubmit={handleSubmit} ></BookFormModal>
                    </Container>

                </Route>
                <Route exact path="/all-books">
                    {!isFetching && <Container>
                        <BookList bookList={bookList}></BookList>
                    </Container>}
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
}

export default App;




