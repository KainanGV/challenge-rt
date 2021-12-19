import { Request, Response } from "express";
import { CreateExemplarService } from "../services/CreateExemplarService";

class CreateExemplarController {
    async handle(request: Request, response: Response) {
        const body = request.body;

        const createExemplarService = new CreateExemplarService();

        const exemplar = await createExemplarService.execute(body);

        return response.json(exemplar);
    }
}

export { CreateExemplarController }