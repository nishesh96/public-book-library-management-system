

const bookRoutes = require('./books.js')
const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('welcome')
    })


    bookRoutes(app, fs);

}



module.exports = appRouter

