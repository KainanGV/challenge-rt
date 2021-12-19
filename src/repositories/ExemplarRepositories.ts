import { EntityRepository, Repository } from 'typeorm';
import { Exemplar } from '../entities/Exemplar';

@EntityRepository(Exemplar)
class ExemplarRepository extends Repository<Exemplar> {}

export { ExemplarRepository }