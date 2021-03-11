const express = require('express')
const mongoose = require('mongoose')


const app = express() 
const PORT = process.env.PORT || 5000;
app.use(express.json())

app.use('/countries', require('./routes/app.routes'))
app.use('/auth', require('./routes/auth.routes'))


const start = async() => {
    try { 
        await mongoose.connect('mongodb+srv://travel-app:travel-app@cluster0.sicqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()