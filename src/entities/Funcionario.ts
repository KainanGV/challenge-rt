import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("funcionario")
class Funcionario {
    @PrimaryColumn()
    readonly codigoFuncionario: string;

    @Column()
    nome: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.codigoFuncionario) {
            this.codigoFuncionario = uuid();
        }
    }
}

export { Funcionario }