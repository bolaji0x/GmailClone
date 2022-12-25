const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
require('express-async-errors');
const morgan = require('morgan');

const cookieParser = require('cookie-parser');
const cors = require('cors')
// db and authenticateUser
const connectDB = require('./db/connect.js');

// routers
const authRouter = require('./routes/authRoutes.js');

// middleware
const notFoundMiddleware = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');
const authenticateUser = require('./middleware/auth.js');


if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
  
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();


