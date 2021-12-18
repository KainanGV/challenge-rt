import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Livro1639862957508 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "livro",
                columns: [
                    {
                        name: "codigoLivro",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "titulo",
                        type: "varchar"
                    },
                    {
                        name: "ano",
                        type: "number"
                    },
                    {
                        name: "editora",
                        type: "varchar"
                    },
                    {
                        name: "edicao",
                        type: "varchar"
                    },
                    {
                        name: "isbn",
                        type: "varchar"
                    },
                    {
                        name: "autor",
                        type: "varchar"
                    },
                    {
                        name: "funcionario_create",
                        type: "uuid"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKFuncionarioLivro",
                        referencedTableName: "funcionario",
                        referencedColumnNames: ["codigoFuncionario"],
                        columnNames: ["funcionario_create"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("livro");
    }

}
