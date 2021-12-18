import { EntityRepository, Repository } from 'typeorm';
import { Livro } from '../entities/Livro';

@EntityRepository(Livro)
class LivroRepository extends Repository<Livro> {}

export { LivroRepository }