import { EmprestimoRepository } from "../repositories/EmprestimoRepositories";
import { getCustomRepository } from 'typeorm';

class ListEmprestimoService {
    async execute() {
        const emprestimoRepository = getCustomRepository(EmprestimoRepository);

        const emprestimos = await emprestimoRepository.find({
            relations: ["funcionario", "exemplar", "aluno"]
        });

        return emprestimos;
    } 
}

export { ListEmprestimoService }