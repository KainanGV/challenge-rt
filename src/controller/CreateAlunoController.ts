import { Request, Response } from "express";
import { CreateAlunoService } from "../services/CreateAlunoService";

class CreateAlunoController {
    async handle(request: Request, response: Response) {
        const { nome, matricula, telefone } = request.body;

        const createAlunoService = new CreateAlunoService();

        const aluno = await createAlunoService.execute({ nome, telefone, matricula });

        return response.json(aluno);
    }
}

export { CreateAlunoController }