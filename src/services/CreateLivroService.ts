import { LivroRepository } from "../repositories/LivroRepositories";
import { FuncionarioRepository } from "../repositories/FuncionarioRespositories";
import { getCustomRepository } from 'typeorm';

interface ICreateLivro {
    titulo: string;

    autor: string;

    ano: number;

    edicao: string;

    editora: string;

    isbn: string;

    funcionario_create: string;
}

class CreateLivroService {
    async execute({ autor, ano, edicao, editora, funcionario_create, isbn, titulo }: ICreateLivro) {
        const livroRepository = getCustomRepository(LivroRepository);

        const funcionarioRepository = getCustomRepository(FuncionarioRepository);

        if (!funcionario_create) {
            throw new Error("funcionario is empty");
        }

        const funcionarioAlreadyExists = await funcionarioRepository.findOne({ 
            codigoFuncionario: funcionario_create
         });

        if (!funcionarioAlreadyExists) {
            throw new Error("funcionario is not exists");
        }

        const livroAlreadyExists = await livroRepository.findOne({
            isbn
        })

        if (livroAlreadyExists) {
            throw new Error("livro already exists");
        }

        const livro = livroRepository.create({
            ano,
            autor,
            edicao,
            isbn,
            editora,
            titulo,
            funcionario_create
        });

        await livroRepository.save(livro);

        return livro;
    }
}

export { CreateLivroService }