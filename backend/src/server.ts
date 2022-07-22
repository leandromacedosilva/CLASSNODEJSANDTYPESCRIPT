import express from 'express';
import CreateCourseService from './CreateCourseService';

const app = express();

const port = 8888;

app.use(express.json)

app.get('/', CreateCourseService/*(request, reponse) => {
  return reponse.json({message: 'Hello world, estou utilizado TypeScript'});
}*/);

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});