import { FuncionarioRepository } from "../repositories/FuncionarioRespositories"
import { getCustomRepository } from 'typeorm';

class CreateFuncionarioService {
    async execute(nome: string) {
        const funcionarioRepository = getCustomRepository(FuncionarioRepository);

        if (!nome) {
            throw new Error("Nome is empty"); 
        }

        const funcionarioAlreadyExists = await funcionarioRepository.findOne({ nome });

        if (funcionarioAlreadyExists) {
            throw new Error("User Already exists");
        }

        const funcionario = funcionarioRepository.create({
            nome
        });

        await funcionarioRepository.save(funcionario);

        return funcionario;
    }
}

export { CreateFuncionarioService }