import { Request, Response } from "express";
import { container } from "tsyringe";

import CurriculumGetByIdService from "../services/curriculum/CurriculumGetByIdService";
import CurriculumSaveService from "../services/curriculum/CurriculumSaveService";

export default class CurriculumController {
  public async getById(req: Request, res: Response): Promise<Response> {
    const { usuarioId } = req.params;

    try {
      const curriculumService = container.resolve(CurriculumGetByIdService);
      return res.send(await curriculumService.get(Number(usuarioId)));
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const curriculumService = container.resolve(CurriculumSaveService);
      return res.send(await curriculumService.add(req.body));
    } catch (error) {
      return res.status(409).send(error);
    }
  }
}
