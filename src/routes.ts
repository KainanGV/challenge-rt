import { Router } from 'express';
import { CreateFuncionarioController } from './controller/CreateFuncionarioController';
import { CreateAlunoController } from './controller/CreateAlunoController';
import { CreateLivroController } from './controller/CreateLivroController';
import { CreateExemplarController } from './controller/CreateExemplarController';
import { CreateEmprestimoController } from './controller/CreateEmprestimoController';
import { ListEmprestimosController } from './controller/ListEmprestimosController';

const router = Router();

const createFuncionarioController = new CreateFuncionarioController();
const createAlunoController = new CreateAlunoController();
const createLivroController = new CreateLivroController();
const createExemplarController = new CreateExemplarController();
const createEmprestimoService = new CreateEmprestimoController();
const listEmprestimosController = new ListEmprestimosController();

router.post('/funcionario', createFuncionarioController.handle);
router.post('/aluno', createAlunoController.handle);
router.post('/livro', createLivroController.handle);
router.post('/exemplar', createExemplarController.handle);
router.post('/emprestimo', createEmprestimoService.handle);
router.get('/emprestimo', listEmprestimosController.handle);

export { router }