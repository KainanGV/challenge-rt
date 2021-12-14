import 'reflect-metadata';

import express from 'express';

import './database';

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))


