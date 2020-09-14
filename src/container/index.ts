import { container } from "tsyringe";

import UserRepository from "../repositories/user/UserRepository";
import IUserRepository from "../repositories/user/IUserRepository";

import RoleRepository from "../repositories/role/RoleRepository";
import IRoleRepository from "../repositories/role/IRoleRepository";

import UserRoleRepository from "../repositories/userRole/UserRoleRepository";
import IUserRolseRepository from "../repositories/userRole/IUserRoleRepository";

import IContactRepository from "../repositories/contact/IContactRepository";
import ContactRepository from "../repositories/contact/ContactRepository";

import ICurriculumRepository from "../repositories/curriculum/ICurriculumRepository";
import CurriculumRepository from "../repositories/curriculum/CurriculumRepository";

import IExperienceRepository from "../repositories/experience/IExperienceRepository";
import ExperienceRepository from "../repositories/experience/ExperienceRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IRoleRepository>("RoleRepository", RoleRepository);

container.registerSingleton<IUserRolseRepository>(
  "UserRoleRepository",
  UserRoleRepository
);

container.registerSingleton<IContactRepository>(
  "ContactRepository",
  ContactRepository
);

container.registerSingleton<ICurriculumRepository>(
  "CurriculumRepository",
  CurriculumRepository
);

container.registerSingleton<IExperienceRepository>(
  "ExperienceRepository",
  ExperienceRepository
);
