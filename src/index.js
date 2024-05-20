import express from 'express'
import router from './routes/v1/index.js'
import 'express-async-errors'
import cors from 'cors'
import helmet from 'helmet'
import errorHandler from './middlewares/error.js'

const app = express()
const port = 2210

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})