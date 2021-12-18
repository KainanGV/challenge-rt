import { AlunoRepository } from "../repositories/AlunoRepositories";
import { getCustomRepository } from 'typeorm';

interface ICreateAluno {
    nome: string;
    matricula: string;
    telefone: string;
}

class CreateAlunoService {
    async execute({matricula, telefone, nome}: ICreateAluno) {
        const alunoRepository = getCustomRepository(AlunoRepository);

        if (!matricula) {
            throw new Error("matricula is empty");
        }

        const alunoAlreadyExists = await alunoRepository.findOne({ matricula });

        if (alunoAlreadyExists) {
            throw new Error("User Already exists");
        }

        const aluno = alunoRepository.create({
            matricula, 
            telefone,
            nome
        });

        await alunoRepository.save(aluno);

        return aluno;
    }
}

export { CreateAlunoService }