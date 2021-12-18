import { Request, Response } from "express";
import { CreateLivroService } from "../services/CreateLivroService";

class CreateLivroController {
    async handle(request: Request, response: Response) {
        const body = request.body;

        const createFuncionarioService = new CreateLivroService();

        const livro = await createFuncionarioService.execute(body);

        return response.json(livro);
    }
}

export { CreateLivroController }