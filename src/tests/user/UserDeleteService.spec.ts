import "reflect-metadata";
import ConnectionPostgres from "../../infra/typeorm";
import UserDeleteService from "../../services/user/UserDeleteService";
import UserRepository from "../../repositories/user/UserRepository";
import UserSaveService from "../../services/user/UserSaveService";

let conn: ConnectionPostgres = new ConnectionPostgres();
let userRepository: UserRepository;
let userDeleteSerivce: UserDeleteService;
let userSaveService: UserSaveService;

describe("UserDeleteService", () => {
  beforeAll(async () => {
    // New database Connection:
    await conn.create("test");

    // User Instances:
    userRepository = new UserRepository();
    userSaveService = new UserSaveService(userRepository);
    userDeleteSerivce = new UserDeleteService(userRepository);
  });

  afterAll(async () => {
    await conn.close();
  });

  afterEach(async () => {
    await conn.clear();
  });

  describe("Delete User", () => {
    test("should be able to delete an user", async () => {
      const user = await userSaveService.add({
        login: "13.8320-7",
        senha: "12345678",
      });

      expect(await userDeleteSerivce.delete(user.usuarioId)).toHaveProperty(
        "usuarioId"
      );
    });
  });
});
