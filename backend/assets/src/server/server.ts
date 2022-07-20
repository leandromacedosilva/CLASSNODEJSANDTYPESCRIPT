import express from 'express';

const app = express();

const port = 8888;

app.use(express.json)

app.get('/', (request, reponse) => {

  return reponse.json({message: 'Hello world, estou utilizado TypeScript'});
})

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});