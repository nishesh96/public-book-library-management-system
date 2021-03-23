import { React, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import mockdata from "../mockdata.json";
import AddBookModal from "./addBook/addBook";
import BookList from "./bookList/bookList";
import Header from "./header/header";
import SearchBar from "./searchBar/searchBar";
import BookFormModal from "./bookFormModal/bookFormModal";
import * as actions from "../redux/actions";
import Container from "./container/container";
import { filterBooks } from "../utils/helper";

function App() {
  const data = useSelector((state) => state.items);
  const isFetching = useSelector((state) => state.isFetching);
  const dispatch = useDispatch();

  const [bookList, setBookList] = useState([]);
  const [searchedBookList, setSearchedBookList] = useState([]);
  const [keyword, setKeyword] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const formRef = useRef();

  const handleModal = () => {
    formRef.current.reset();
    setModalOpen(!modalOpen);
    if (edit) setEdit(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let { name, desc, author, count } = form.elements;
    name = name.value.trim();
    desc = desc.value.trim();
    author = author.value.trim();
    count = count.value.trim();

    if (!name || !desc || !author || !count) {
      alert("Enter all details");
    } else {
      if (!edit) {
        dispatch(
          actions.addBook({
            name: name,
            description: desc,
            count: count,
            author: author,
          })
        );
        alert("Book Added");
      } else {
        dispatch(
          actions.updateBook({
            id: edit,
            name: name,
            description: desc,
            count: count,
            author: author,
          })
        );
      }
      //form.reset();
      handleModal();
    }
  };

  const handleEdit = ({ id, name, description, author, count }) => {
    handleModal();
    setEdit(id);
    const formInput = formRef.current.elements;
    formInput.name.value = name;
    formInput.desc.value = description;
    formInput.author.value = author;
    formInput.count.value = count;
  };

  useEffect(() => {
    if (!isFetching) {
      const dataValues = Object.values(data);
      setBookList(dataValues);
    }
  }, [isFetching, data]);

  useEffect(() => {
    dispatch(actions.getAllBooks());
  }, []);

  useEffect(() => {
    if (keyword) {
      const filteredBooklist = filterBooks(bookList, keyword);
      setSearchedBookList(filteredBooklist);
    } else {
      setSearchedBookList([]);
    }
  }, [keyword, bookList]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Container>
              <Header handleModal={handleModal}></Header>
              <SearchBar keyword={keyword} setKeyword={setKeyword}></SearchBar>
              {keyword &&
                (searchedBookList.length ? (
                  <BookList
                    bookList={searchedBookList}
                    handleEdit={handleEdit}
                  ></BookList>
                ) : (
                  <p align="center">No books found...</p>
                ))}
              <BookFormModal
                handleClose={handleModal}
                show={modalOpen}
                handleSubmit={handleSubmit}
                edit={edit}
                formRef={formRef}
              ></BookFormModal>
            </Container>
          </Route>
          <Route exact path="/all-books">
            {!isFetching && (
              <Container>
                <BookList bookList={bookList}></BookList>
              </Container>
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
