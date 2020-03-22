import App from './app';

import { bodyParseJson, bodyParseUrlencoded } from './middlewares/body-parser';
import { logger } from './middlewares/morgan';

import { routes } from './routes/routes';

const server = new App({
	middlewares: [bodyParseJson, bodyParseUrlencoded, logger],
	routes: routes,
});

server.listen();
