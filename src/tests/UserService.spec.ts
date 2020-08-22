import "reflect-metadata";
import UserService from "../services/UserService";
import Usuario from "../entity/Usuario";
import { Repository, getRepository } from "typeorm";

let userService: UserService;

describe("CreateUser", () => {
  beforeEach(() => {
    const UserRepository: Repository<Usuario> = getRepository(Usuario);
    userService = new UserService(UserRepository);
  });

  it("should be able to create a new user", async () => {
    const user = await userService.add({
      login: "13.8320-7",
      senha: "12345678",
      tipoId: 1,
    });

    expect(user).toHaveProperty("id");
  });

  it("should not be able to create two users with the same login", async () => {
    await userService.add({
      login: "13.8320-7",
      senha: "12345678",
      tipoId: 1,
    });

    await expect(
      await userService.add({
        login: "13.8320-7",
        senha: "12345678",
        tipoId: 1,
      })
    ).rejects.toBeInstanceOf("id");
  });
});
