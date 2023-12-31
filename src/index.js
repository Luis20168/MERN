const express= require('express');
const morgan= require('morgan');
const path = require('path')



const { mongoose }= require('./database');

const app= express();




//settings
app.set('port', process.env.PORT || 3000);

//Middlewaes
app.use(morgan('dev'))
app.use(express.json());

//routes
app.use('/api/tasks' ,require('./routes/task.routes'))

//Static files

app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')} `)
})