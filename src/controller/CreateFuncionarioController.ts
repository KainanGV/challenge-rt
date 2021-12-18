import { Request, Response } from "express";
import { CreateFuncionarioService } from "../services/CreateFuncionarioService";

class CreateFuncionarioController {
    async handle(request: Request, response: Response) {
        const { nome } = request.body;

        const createFuncionarioService = new CreateFuncionarioService();

        const funcionario = await createFuncionarioService.execute(nome);

        return response.json(funcionario);
    }
}

export { CreateFuncionarioController }