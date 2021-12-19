import { AlunoRepository } from "../repositories/AlunoRepositories";
import { FuncionarioRepository } from "../repositories/FuncionarioRespositories";
import { ExemplarRepository } from "../repositories/ExemplarRepositories";
import { EmprestimoRepository } from "../repositories/EmprestimoRepositories";
import { getCustomRepository } from 'typeorm';

interface ICreateEmprestimo {
    situacao: number;

    dataPrevistaDevolucao: string;

    dataEmprestimo: string;

    dataEntrega: string;

    funcionario_create: string;

    aluno_create: string;

    exemplar_create: string;
}

class CreateEmprestimoService {
    async execute({ funcionario_create, aluno_create, exemplar_create, situacao, dataEmprestimo, dataEntrega, dataPrevistaDevolucao }: ICreateEmprestimo) {
        const funcionarioRepository = getCustomRepository(FuncionarioRepository);

        const exemplarRepository = getCustomRepository(ExemplarRepository);

        const emprestimoRepository = getCustomRepository(EmprestimoRepository);

        const alunoRepository = getCustomRepository(AlunoRepository);

        if (!funcionario_create) {
            throw new Error("funcionario is empty");
        }

        if (!aluno_create) {
            throw new Error("aluno is empty");
        }

        if (!exemplar_create) {
            throw new Error("exemplar is empty");
        }

        const funcionarioAlreadyExists = await funcionarioRepository.findOne({
            codigoFuncionario: funcionario_create
        });

        if (!funcionarioAlreadyExists) {
            throw new Error("funcionario is not exists");
        }

        const exemplarAlreadyExists = await exemplarRepository.findOne({
            codigoExemplar: exemplar_create
        });

        if (!exemplarAlreadyExists) {
            throw new Error("Exemplar is not Exists");
        }

        const alunoAlreadyExists = await alunoRepository.findOne({
            codigoAluno: aluno_create
        });

        if (!alunoAlreadyExists) {
            throw new Error("aluno is not Exists");
        }

        const emprestimo = emprestimoRepository.create({
            aluno_create,
            dataEmprestimo,
            dataPrevistaDevolucao,
            dataEntrega,
            situacao,
            funcionario_create,
            exemplar_create
        });

        await emprestimoRepository.save(emprestimo);

        return emprestimo;
    } 
}

export { CreateEmprestimoService }