
const { readFile, writeFile } = require('../utils/fileReader');
const { v4: uuid } = require('uuid');

const bookRoutes = (app, fs) => {


    // read file

    app.get('/books', (req, res) => {

        readFile(data => {
            res.send(data);
        }, true);
    });


    app.post('/books', (req, res) => {

        readFile(data => {
            const newData = { ...data };
            const newBookId = uuid();
            const body = {
                ...req.body,
                id: newBookId
            }
            newData[newBookId] = body;
            console.log(newData);


            writeFile(JSON.stringify(newData, null, 2), () => {
                res.status(200).send(`New Book Added`);
            });
        }, true);

    });



    app.put('/books/:id', (req, res) => {

        readFile(data => {
            const newData = { ...data };
            const bookId = req.params['id'];
            newData[bookId] = req.body;

            writeFile(JSON.stringify(newData, null, 2), () => {
                res.status(200).send(`Book id:${bookId} updated`)
            });
        }, true);

    });

}
module.exports = bookRoutes;