import { Router} from 'express';
import { CreateFuncionarioController } from './controller/CreateFuncionarioController';

const router = Router();

const createFuncionarioController = new CreateFuncionarioController();

router.post('/funcionario', createFuncionarioController.handle);

export { router }