import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json( {limit: "30mb", extended: true} ));
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true} ));
app.use(cors());
app.use('/posts', postRoutes); // puts prefix 'posts' in every URL

// MongoDB Altas- https://cloud.mongodb.com/v2/652bb0ee816b327337f4645b#/overview

const CONNECTION_URL = 'mongodb+srv://rdhkdh21:vacuum17a4023@cluster0.go3kuqg.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true} )
    .then( ()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)) )
    .catch( (error)=> console.log(error.message) );

//mongoose.set('useFindAndModify',false);