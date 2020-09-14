import "reflect-metadata";

import ConnectionPostgres from "../../infra/typeorm";
import UserSaveService from "../../services/user/UserSaveService";
import UserRepository from "../../repositories/user/UserRepository";

let conn: ConnectionPostgres = new ConnectionPostgres();
let userRepository: UserRepository;
let userSaveService: UserSaveService;

describe("UserSaveSerivce", () => {
  beforeAll(async () => {
    // New database Connection:
    await conn.create("test");

    // User Instances:
    userRepository = new UserRepository();
    userSaveService = new UserSaveService(userRepository);
  });

  afterAll(async () => {
    await conn.close();
  });

  afterEach(async () => {
    await conn.clear();
  });

  describe("Create User", () => {
    test("should be able to create a new user", async () => {
      expect(
        await userSaveService.add({
          login: "13.8320-7",
          senha: "12345678",
        })
      ).toHaveProperty("usuarioId");
    });
  });

  describe("Create User w/ same login", () => {
    test("should not be able to create two users with the same login", async () => {
      await userSaveService.add({
        login: "13.8320-7",
        senha: "12345678",
      });

      expect(
        userSaveService.add({
          login: "13.8320-7",
          senha: "12345678",
        })
      ).rejects.toThrowError("User already created");
    });
  });
});
