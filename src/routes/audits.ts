import express, { Router } from 'express';
import { Request, Response } from 'express';

class AuditsController {
	public path: string = '/v1/audits';
	public router: Router = express.Router();

	constructor() {
		this.auditsRoutes();
	}

	public auditsRoutes() {
		this.router.get('/', this.auditUrl);
	}

	auditUrl = (req: Request, res: Response) => {
		res.status(200).send('test');
	};
}

export default AuditsController;
