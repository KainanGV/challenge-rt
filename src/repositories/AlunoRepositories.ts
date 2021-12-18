import { EntityRepository, Repository } from 'typeorm';
import { Aluno } from '../entities/Aluno';

@EntityRepository(Aluno)
class AlunoRepository extends Repository<Aluno> {}

export { AlunoRepository }