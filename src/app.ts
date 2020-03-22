import express from 'express';
import { Application } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
class App {
	public app: Application;
	public port: number;

	constructor(appConfig: { middlewares: any; routes: any }) {
		this.app = express();
		this.port = parseInt(process.env.PORT as string) || 3000;
		this.middlewares(appConfig.middlewares);
		this.routes(appConfig.routes);
	}

	private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void }) {
		middleWares.forEach((middleWare) => {
			this.app.use(middleWare);
		});
	}

	private routes(controllers: { forEach: (arg0: (controller: any) => void) => void }) {
		controllers.forEach((controller) => {
			this.app.use(`${process.env.BASEURL}+${controller.path}`, controller.router);
		});
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`Server listening on http://localhost:${this.port}`);
		});
	}
}

export default App;
