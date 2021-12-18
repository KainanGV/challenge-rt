import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("aluno")
class Aluno {
    @PrimaryColumn()
    readonly codigoAluno: string;

    @Column()
    nome: string;

    @Column()
    matricula: string;

    @Column()
    telefone: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.codigoAluno) {
            this.codigoAluno = uuid();
        }
    }
}

export { Aluno }