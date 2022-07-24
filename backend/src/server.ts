import express from 'express';

import { createCourse } from './route';

const app = express();

const port = 8888;

app.get('/', createCourse);

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});