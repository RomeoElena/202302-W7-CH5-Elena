import express from 'express';
import createDebug from 'debug';
import { _dirname } from './config.js';
import morgan from 'morgan';
import cors from 'cors';
import { usersRouter } from './routers/users.router.js';

const debug = createDebug('W7:app');

export const app = express();
app.disable('x-powered-by');
debug(_dirname);
app.use(morgan('dev'));
app.use(express.static('public'));

app.use((_req, _resp, next) => {
  debug('Soy un middleware');
  next();
});

const corsOrigins = {
  origin: '*',
};
app.use(cors(corsOrigins));
app.use(express.json());

app.use('/users', usersRouter);

app.use('/', (_req, resp) => {
  resp.json({
    info: 'Challenge weekend RRSS',
  });
});
