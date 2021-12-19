import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Emprestimo1639880174536 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "emprestimo",
                columns: [
                    {
                        name: "codigoEmprestimo",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "dataPrevistaDevolucao",
                        type: "varchar"
                    },
                    {
                        name: "dataEmprestimo",
                        type: "varchar"
                    },
                    {
                        name: "dataEntrega",
                        type: "varchar"
                    },
                    {
                        name: "situacao",
                        type: "number"
                    },
                    {
                        name: "funcionario_create",
                        type: "uuid"
                    },
                    {
                        name: "aluno_create",
                        type: "uuid"
                    },
                    {
                        name: "exemplar_create",
                        type: "uuid"
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
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKFuncionarioEmprestimo",
                        referencedTableName: "funcionario",
                        referencedColumnNames: ["codigoFuncionario"],
                        columnNames: ["funcionario_create"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKAlunoEmprestimo",
                        referencedTableName: "aluno",
                        referencedColumnNames: ["codigoAluno"],
                        columnNames: ["aluno_create"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKEmprestimoExemplar",
                        referencedTableName: "exemplar",
                        referencedColumnNames: ["codigoExemplar"],
                        columnNames: ["exemplar_create"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("emprestimo");

    }

}
