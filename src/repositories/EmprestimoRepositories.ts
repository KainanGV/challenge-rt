import { EntityRepository, Repository } from 'typeorm';
import { Emprestimo } from '../entities/Emprestimo';

@EntityRepository(Emprestimo)
class EmprestimoRepository extends Repository<Emprestimo> {}

export { EmprestimoRepository }