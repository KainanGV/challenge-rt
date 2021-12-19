import { Request, Response } from "express";
import { CreateEmprestimoService } from "../services/CreateEmprestimoService";

class CreateEmprestimoController {
    async handle(request: Request, response: Response) {
        const body = request.body;

        const createEmprestimoService = new CreateEmprestimoService();

        const emprestimo = await createEmprestimoService.execute(body);

        return response.json(emprestimo);
    }
}

export { CreateEmprestimoController }