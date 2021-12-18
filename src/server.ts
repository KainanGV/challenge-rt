import 'reflect-metadata';

import express, { Response, Request, NextFunction } from 'express';

import 'express-async-errors';

import { router } from './routes';

import { handleErrors } from './middlewares/handleErrors';

import './database';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.use(handleErrors);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))


