import { Request, Response } from "express";
import { container } from "tsyringe";
import EducationDeleteService from "../services/education/EducationDeleteService";

import EducationGetAllService from "../services/education/EducationGetAllService";
import EducationGetByIdSerivce from "../services/education/EducationGetByIdService";
import EducationSaveService from "../services/education/EducationSaveService";

export default class EducationController {
  public async all(req: Request, res: Response): Promise<Response> {
    try {
      const educationService = container.resolve(EducationGetAllService);
      return res.send(await educationService.all());
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { formacaoId } = req.params;

    try {
      const educationService = container.resolve(EducationGetByIdSerivce);
      return res.send(await educationService.getById(Number(formacaoId)));
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const educationService = container.resolve(EducationSaveService);
      return res.send(await educationService.add(req.body));
    } catch (error) {
      return res.status(409).send(error);
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { formacaoId } = req.params;
    try {
      const educationService = container.resolve(EducationDeleteService);
      return res.send(await educationService.delete(Number(formacaoId)));
    } catch (error) {
      return res.status(409).send(error);
    }
  }
}
