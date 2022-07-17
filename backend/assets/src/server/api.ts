import express from 'express';

const app = express();

const port = 8888;

app.get('/accounts/users', (request, reponse) => {
  return reponse.json({message: 'Hello world!'});
})

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});