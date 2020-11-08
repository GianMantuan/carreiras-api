import { container } from "tsyringe";

import UserRepository from "../repositories/user/UserRepository";
import IUserRepository from "../repositories/user/IUserRepository";

import RoleRepository from "../repositories/role/RoleRepository";
import IRoleRepository from "../repositories/role/IRoleRepository";

import UserRoleRepository from "../repositories/userRole/UserRoleRepository";
import IUserRolseRepository from "../repositories/userRole/IUserRoleRepository";

import ContactRepository from "../repositories/contact/ContactRepository";
import IContactRepository from "../repositories/contact/IContactRepository";

import CurriculumRepository from "../repositories/curriculum/CurriculumRepository";
import ICurriculumRepository from "../repositories/curriculum/ICurriculumRepository";

import ExperienceRepository from "../repositories/experience/ExperienceRepository";
import IExperienceRepository from "../repositories/experience/IExperienceRepository";

import CertificateRepository from "../repositories/certificate/CertificateRepository";
import ICertificateRepository from "../repositories/certificate/ICertificateRepository";

import EducationRepository from "../repositories/education/EducationRepository";
import IEducationRepository from "../repositories/education/IEducationRepository";

import JobOfferRepository from "../repositories/jobOffer/JobOfferRepository";
import IJobOfferRepository from "../repositories/jobOffer/IJobOfferRepository";

import JobOfferTypeRepository from "../repositories/jobOfferType/JobOfferTypeRepository";
import IJobOfferTypeRepository from "../repositories/jobOfferType/IJobOfferTypeRepository";

import CurriculumJobOfferRepository from "../repositories/curriculumJobOffer/CurriculumJobOfferRepository";
import ICurriculumJobOfferRepository from "../repositories/curriculumJobOffer/ICurriculumJobOfferRepository";

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

container.registerSingleton<ICertificateRepository>(
  "CertificateRepository",
  CertificateRepository
);

container.registerSingleton<IEducationRepository>(
  "EducationRepository",
  EducationRepository
);

container.registerSingleton<IJobOfferRepository>(
  "JobOfferRepository",
  JobOfferRepository
);

container.registerSingleton<IJobOfferTypeRepository>(
  "JobOfferTypeRepository",
  JobOfferTypeRepository
);

container.registerSingleton<ICurriculumJobOfferRepository>(
  "CurriculumJobOfferRepository",
  CurriculumJobOfferRepository
);
