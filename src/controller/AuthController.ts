// import { Request, Response } from "express";
// import * as jwt from "jsonwebtoken";
// import { Repository } from "typeorm";

// import Usuario from "../entity/Usuario";
// import config from "../config/config";

// class AuthController {
//   private userRepository: Repository<Usuario>;

//   public async login(req: Request, res: Response) {
//     let { login, senha } = req.body;
//     let user: Usuario;

//     try {
//       user = await this.userRepository.findOneOrFail({
//         where: { login },
//       });

//       if (user.checkValidUnencryptedPassword(senha)) {
//         res.send(
//           jwt.sign(
//             { usuarioId: user.usuarioId, login: user.login },
//             config.jwtSecret,
//             { expiresIn: "1h" }
//           )
//         );
//       }
//       res.status(401).send();
//       return;
//     } catch (error) {
//       res.status(401).send();
//     }
//   }
// }

// export default AuthController;
