import { Request, Response } from "express";
import { container } from "tsyringe";
import ExperienceDeleteService from "../services/experience/ExperienceDeleteService";

import ExperienceGetAllService from "../services/experience/ExperienceGetAllService";
import ExperienceGetByIdService from "../services/experience/ExperienceGetByIdService";
import ExperienceSaveService from "../services/experience/ExperienceSaveService";

export default class ExperienceController {
  public async all(req: Request, res: Response): Promise<Response> {
    try {
      const experienceService = container.resolve(ExperienceGetAllService);
      return res.send(await experienceService.all());
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { curriculoId } = req.params;
    try {
      const experienceService = container.resolve(ExperienceGetByIdService);
      return res.send(await experienceService.getById(Number(curriculoId)));
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const experienceService = container.resolve(ExperienceSaveService);
      return res.send(await experienceService.add(req.body));
    } catch (error) {
      return res.status(409).send(error);
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { experienciaId } = req.params;
    try {
      const experienceService = container.resolve(ExperienceDeleteService);
      return res.send(await experienceService.delete(Number(experienciaId)));
    } catch (error) {
      return res.status(409).send(error);
    }
  }
}
