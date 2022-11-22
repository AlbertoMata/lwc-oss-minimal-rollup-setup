import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const port = 5000; 

app.set('port', process.env.PORT || port);

app.use('/', express.static(path.join(__dirname, '../../client/')));

app.listen(app.get('port'), function () {
	console.log(`App listening at the port ${port}!`);
});