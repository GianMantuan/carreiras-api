import "reflect-metadata";
import ConnectionPostgres from "../../infra/typeorm";
import RoleRepository from "../../repositories/role/RoleRepository";
import RoleSaveService from "../../services/role/RoleSaveService";
import RoleDeleteService from "../../services/role/RoleDeleteService";

let conn: ConnectionPostgres = new ConnectionPostgres();
let roleRepository: RoleRepository;
let roleSaveService: RoleSaveService;
let roleDeleteService: RoleDeleteService;

describe("DeleteRole", () => {
  beforeAll(async () => {
    // New database Connection:
    await conn.create("test");

    // Role Instances:
    roleRepository = new RoleRepository();
    roleSaveService = new RoleSaveService(roleRepository);
    roleDeleteService = new RoleDeleteService(roleRepository);
  });
  afterAll(async () => {
    await conn.close();
  });
  afterEach(async () => {
    await conn.clear();
  });

  describe("Delete Role", () => {
    test("should be able to delete a role", async () => {
      let role = await roleSaveService.add({
        descricao: "Tipo Teste",
      });
      expect(await roleDeleteService.delete(role.tipoId)).toHaveProperty(
        "tipoId"
      );
    });
  });
});
