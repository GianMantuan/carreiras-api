import "reflect-metadata";
import ConnectionPostgres from "../../infra/typeorm";
import RoleRepository from "../../repositories/role/RoleRepository";
import RoleSaveService from "../../services/role/RoleSaveService";

let conn: ConnectionPostgres = new ConnectionPostgres();
let roleRepository: RoleRepository;
let roleSaveService: RoleSaveService;

describe("RoleSaveService", () => {
  beforeAll(async () => {
    // New database Connection:
    await conn.create("test");

    // Role Instances:
    roleRepository = new RoleRepository();
    roleSaveService = new RoleSaveService(roleRepository);
  });

  afterAll(async () => {
    await conn.close();
  });

  afterEach(async () => {
    await conn.clear();
  });

  describe("Create Role", () => {
    test("should be able to create a new role", async () => {
      const role = await roleSaveService.add({
        descricao: "Tipo Teste",
      });
      expect(role).toHaveProperty("tipoId");
    });
  });

  describe("Update Role", () => {
    test("should be able to update role description", async () => {
      let role = await roleSaveService.add({
        descricao: "Role Example",
      });

      const description = role.descricao;
      const roleId = role.tipoId;

      role = await roleSaveService.add({
        tipoId: role.tipoId,
        descricao: "Updated Role Example",
      });

      expect(
        role.descricao !== description && roleId === role.tipoId
      ).toBeTruthy();
    });
  });
});
