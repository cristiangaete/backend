const express = require('express');
const cors = require('cors');
const app = express();


//settings
app.set('port',process.env.PORT || 3000);


//middlewares
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

//routes
app.use(require('./routes/store'));

app.listen(app.get('port'), ()=>{
    console.log("server port", app.get('port'))
})