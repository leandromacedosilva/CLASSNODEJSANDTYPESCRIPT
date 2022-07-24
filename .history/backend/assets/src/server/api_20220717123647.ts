import express from 'express';

const app = express();

const port = 8888;

app.use(express.json)

app.get('/accounts/users', (request, reponse) => {

  const users = [
    {
      name: 'Leandro',
      lastname: 'M Silva',
      username: 'leo',
      document: '465.387.398-58'
    }
  ];

  return reponse.json({data: users});
})

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});