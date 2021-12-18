import { Router } from 'express';
import { CreateFuncionarioController } from './controller/CreateFuncionarioController';
import { CreateAlunoController } from './controller/CreateAlunoController';

const router = Router();

const createFuncionarioController = new CreateFuncionarioController();
const createAlunoController = new CreateAlunoController();

router.post('/funcionario', createFuncionarioController.handle);
router.post('/aluno', createAlunoController.handle);


export { router }