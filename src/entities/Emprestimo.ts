import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Funcionario } from './Funcionario';
import { Exemplar } from './Exemplar';
import { Aluno } from './Aluno';

@Entity("emprestimo")
class Emprestimo {
    @PrimaryColumn()
    readonly codigoEmprestimo: string;

    @Column()
    dataPrevistaDevolucao: string;

    @Column()
    dataEmprestimo: string;

    @Column()
    dataEntrega: string;

    @Column()
    situacao: number;

    @Column()
    funcionario_create: string;

    @JoinColumn({ name: "funcionario_create" })
    @ManyToOne(() => Funcionario)
    funcionario: Funcionario;

    @Column()
    exemplar_create: string;

    @JoinColumn({ name: "exemplar_create" })
    @ManyToOne(() => Exemplar)
    exemplar: Exemplar;

    @Column()
    aluno_create: string;

    @JoinColumn({ name: "aluno_create" })
    @ManyToOne(() => Aluno)
    aluno: Aluno;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.codigoEmprestimo) {
            this.codigoEmprestimo = uuid();
        }
    }
}

export { Emprestimo }