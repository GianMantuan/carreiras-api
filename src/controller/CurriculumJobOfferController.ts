import { Request, Response } from "express";
import { container } from "tsyringe";

import CurriculumJobOfferAllService from "../services/curriculumJobOffer/CurriculumJobOfferAllService";
import CurriculumJobOfferGetByIdService from "../services/curriculumJobOffer/CurriculumJobOfferGetByIdService";
import CurriculumJobOfferSaveService from "../services/curriculumJobOffer/CurriculumJobOfferSaveService";
import CurriculumJobOfferDeleteService from "../services/curriculumJobOffer/CurriculumJobOfferDeleteService";

export default class CurriculumJobOfferController {
  public async all(req: Request, res: Response): Promise<Response> {    
    try {
      const curriculumJobOfferSerivce = container.resolve(
        CurriculumJobOfferAllService
      );
      return res.send(await curriculumJobOfferSerivce.all());
    } catch (error) {
      return res.status(404).send(error);
    }
  }
  
  public async getById(req: Request, res: Response): Promise<Response> {
    const { curriculoId } = req.params;
    try {
      const curriculumJobOfferSerivce = container.resolve(
        CurriculumJobOfferGetByIdService
      );
      return res.send(
        await curriculumJobOfferSerivce.getById(Number(curriculoId))
      );
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const curriculumJobOfferSerivce = container.resolve(
        CurriculumJobOfferSaveService
      );
      return res.send(await curriculumJobOfferSerivce.add(req.body));
    } catch (error) {
      return res.status(409).send(error);
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { curriculoId, vagaId } = req.params;
    try {
      const curriculumJobOfferSerivce = container.resolve(
        CurriculumJobOfferDeleteService
      );
      return res.send(
        await curriculumJobOfferSerivce.delete(
          Number(curriculoId),
          Number(vagaId)
        )
      );
    } catch (error) {
      return res.status(409).send(error);
    }
  }
}
