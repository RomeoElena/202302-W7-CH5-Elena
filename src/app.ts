import express from 'express';
import createDebug from 'debug';
// Import { _dirname } from './config.js';
import morgan from 'morgan';
import cors from 'cors';
import { usersRouter } from './routers/users.router.js';
// Import path from 'path';

const debug = createDebug('W7:app');

export const app = express();
app.disable('x-powered-by');

const corsOrigins = {
  origin: '*',
};

app.use(morgan('dev'));
app.use(cors(corsOrigins));
app.use(express.json());

app.use((_req, _resp, next) => {
  debug('Soy un middleware');
  next();
});

// Debug({ __dirname });
// app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/users', usersRouter);

app.use('/', (_req, resp) => {
  resp.json({
    info: 'Challenge weekend RRSS',
    endpoints: {
      users: '/users',
    },
  });
});
