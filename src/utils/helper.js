
const filterBooks = (bookList, keyword) => {
    let keywordLowerCase = keyword.toLowerCase()
    const filteredBooklist = bookList.filter((book) => {
        const { name, author } = book;
        return name.toLowerCase().includes(keywordLowerCase) || author.toLowerCase().includes(keywordLowerCase);
    });
    return filteredBooklist;
}

export { filterBooks }