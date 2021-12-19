import { LivroRepository } from "../repositories/LivroRepositories";
import { FuncionarioRepository } from "../repositories/FuncionarioRespositories";
import { ExemplarRepository } from "../repositories/ExemplarRepositories";
import { getCustomRepository } from 'typeorm';

interface ICreateExemplar {
    quantidade: number;

    quantidadeEmprestada: number;

    funcionario_create: string;

    livro_create: string;
}

class CreateExemplarService {
    async execute({ funcionario_create, livro_create, quantidade, quantidadeEmprestada }: ICreateExemplar) {
        const livroRepository = getCustomRepository(LivroRepository);

        const funcionarioRepository = getCustomRepository(FuncionarioRepository);

        const exemplarRepository = getCustomRepository(ExemplarRepository);

        if (!funcionario_create || !livro_create) {
            throw new Error("funcionario or livro is empty");
        }

        const funcionarioAlreadyExists = await funcionarioRepository.findOne({
            codigoFuncionario: funcionario_create
        });

        if (!funcionarioAlreadyExists) {
            throw new Error("funcionario is not exists");
        }

        const livroAlreadyExists = await livroRepository.findOne({
            codigoLivro: livro_create
        });

        if (!livroAlreadyExists) {
            throw new Error("livro is not exists");
        }

        const exemplarAlreadyExists = await exemplarRepository.findOne({ 
            livro_create
        });

        if(exemplarAlreadyExists) {
            throw new Error("Exemplar Already Exists");
        }

        const exemplar = exemplarRepository.create({
            quantidade,
            quantidadeEmprestada,
            livro_create,
            funcionario_create
        });

        await exemplarRepository.save(exemplar);

        return exemplar;
    }
}

export { CreateExemplarService }