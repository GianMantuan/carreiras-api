import "reflect-metadata";
import ConnectionPostgres from "../../infra/typeorm";
import ContactRepository from "../../repositories/contact/ContactRepository";
import ContactSaveService from "../../services/contact/ContactSaveService";
import UserRepository from "../../repositories/user/UserRepository";
import UserSaveService from "../../services/user/UserSaveService";

let conn: ConnectionPostgres = new ConnectionPostgres();
let userRepository: UserRepository;
let userSaveService: UserSaveService;
let contactRepository: ContactRepository;
let contactSaveService: ContactSaveService;

describe("CreateContact", () => {
  beforeAll(async () => {
    // New database Connection:
    await conn.create("test");

    // User Instances:
    userRepository = new UserRepository();
    userSaveService = new UserSaveService(userRepository);

    // Contact Instances:
    contactRepository = new ContactRepository();
    contactSaveService = new ContactSaveService(contactRepository);
  });
  afterAll(async () => {
    await conn.close();
  });
  afterEach(async () => {
    await conn.clear();
  });

  describe("Create Contact", () => {
    test("should be able to create a new contact", async () => {
      const user = await userSaveService.add({
        login: "13.8320-7",
        senha: "123456789",
      });

      expect(
        await contactSaveService.add(user.usuarioId, {
          nome: "Gian",
          email: "gian@test.com",
          telefoneCelular: "+55 (44) 99916-5258",
          logradouro: "Rua Ignácio Trombini",
          numero: "59",
          cidade: "Campo Mourao",
          estado: "Paraná",
          dataNascimento: "24/06/1995",
          estadoCivil: "Solteiro",
          nacionalidade: "brasileira",
        })
      ).toHaveProperty("nome");
    });
  });

  describe("Update Contact", () => {
    test("should be able to update a contact", async () => {
      const user = await userSaveService.add({
        login: "13.8320-7",
        senha: "123456789",
      });

      let contact = await contactSaveService.add(user.usuarioId, {
        nome: "Gian",
        email: "gian@test.com",
        telefoneCelular: "+55 (44) 99916-5258",
        logradouro: "Rua Ignácio Trombini",
        numero: "59",
        cidade: "Campo Mourao",
        estado: "Paraná",
        dataNascimento: "24/06/1995",
        estadoCivil: "Solteiro",
        nacionalidade: "brasileira",
      });

      let contactName = contact.nome;

      contact = await contactSaveService.add(user.usuarioId, {
        nome: "Teste",
        email: "gian@test.com",
        telefoneCelular: "+55 (44) 99916-5258",
        logradouro: "Rua Ignácio Trombini",
        numero: "59",
        cidade: "Campo Mourao",
        estado: "Paraná",
        dataNascimento: "24/06/1995",
        estadoCivil: "Solteiro",
        nacionalidade: "brasileira",
      });

      expect(contactName !==);
    });
  });
});
