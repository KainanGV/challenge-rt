import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Funcionario } from './Funcionario';
import { Livro } from './Livro';

@Entity("exemplar")
class Exemplar {
    @PrimaryColumn()
    readonly codigoExemplar: string;

    @Column()
    quantidade: number;

    @Column()
    quantidadeEmprestada: number;

    @Column()
    funcionario_create: string;

    @JoinColumn({ name: "funcionario_create" })
    @ManyToOne(() => Funcionario)
    funcionario: Funcionario;

    @Column()
    livro_create: string;

    @JoinColumn({ name: "livro_create" })
    @ManyToOne(() => Livro)
    livro: Livro;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.codigoExemplar) {
            this.codigoExemplar = uuid();
        }
    }
}

export { Exemplar }