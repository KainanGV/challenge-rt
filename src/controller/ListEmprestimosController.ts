import { Request, Response } from "express";
import { ListEmprestimoService } from "../services/ListEmprestimosService";

class ListEmprestimosController {
    async handle(request: Request, response: Response) {
        const listEmprestimosService = new ListEmprestimoService();

        const emprestimos = await listEmprestimosService.execute();

        return response.json(emprestimos);
    }
}

export { ListEmprestimosController }