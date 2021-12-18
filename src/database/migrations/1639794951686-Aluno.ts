import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Aluno1639794951686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "aluno",
                columns: [
                    {
                        name: "codigoAluno",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "matricula",
                        type: "varchar"
                    },
                    {
                        name: "telefone",
                        type: "varchar"
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("aluno");
    }

}
