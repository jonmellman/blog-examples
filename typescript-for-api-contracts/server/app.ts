import express from 'express';
import path from 'path';

import { logger } from './logger';
import { usersRouter } from './users';

const app = express();

app.use(usersRouter);

// `public/index.html` will be loaded on requests to `/`.
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000);
logger.info('Local server running on: http://localhost:3000');
