import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Exemplar1639869237478 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "exemplar",
                columns: [
                    {
                        name: "codigoExemplar",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "quantidade",
                        type: "number"
                    },
                    {
                        name: "quantidadeEmprestada",
                        type: "number"
                    },
                    {
                        name: "funcionario_create",
                        type: "uuid"
                    },
                    {
                        name: "livro_create",
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
                        name: "FKFuncionarioExemplar",
                        referencedTableName: "funcionario",
                        referencedColumnNames: ["codigoFuncionario"],
                        columnNames: ["funcionario_create"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKLivroExemplar",
                        referencedTableName: "livro",
                        referencedColumnNames: ["codigoLivro"],
                        columnNames: ["livro_create"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("exemplar");
    }

}
