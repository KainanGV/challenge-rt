import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Funcionario } from './Funcionario';

@Entity("livro")
class Livro {
    @PrimaryColumn()
    readonly codigoLivro: string;

    @Column()
    titulo: string;

    @Column()
    ano: number;

    @Column()
    editora: string;

    @Column()
    edicao: string;

    @Column()
    autor: string;

    @Column()
    isbn: string;

    @Column()
    funcionario_create: string;

    @JoinColumn({ name: "funcionario_create" })
    @ManyToOne(() => Funcionario)
    funcionario: Funcionario;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.codigoLivro) {
            this.codigoLivro = uuid();
        }
    }
}

export { Livro }