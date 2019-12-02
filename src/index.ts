import dotenv from 'dotenv';
dotenv.config();

import app from './app';

import './database';

function main() {
  app.listen(app.get('port'));
  console.log('Server on port', app.get('port'));
}

main();