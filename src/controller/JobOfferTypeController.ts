import { Request, Response } from "express";
import { container } from "tsyringe";

import JobOfferTypeDeleteService from "../services/jobOfferType/JobOfferTypeDeleteService";
import JobOfferTypeGetAllService from "../services/jobOfferType/JobOfferTypeGetAllSerivce";
import JobOfferTypeSaveService from "../services/jobOfferType/JobOfferTypeSaveService";

export default class JobOfferTypeController {
  public async all(req: Request, res: Response): Promise<Response> {
    try {
      const jobOfferTypeSerivce = container.resolve(JobOfferTypeGetAllService);
      return res.send(await jobOfferTypeSerivce.all());
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const jobOfferTypeSerivce = container.resolve(JobOfferTypeSaveService);
      return res.send(await jobOfferTypeSerivce.add(req.body));
    } catch (error) {
      return res.status(409).send(error);
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { tipoVagaId } = req.params;
    try {
      const jobOfferTypeSerivce = container.resolve(JobOfferTypeDeleteService);
      return res.send(await jobOfferTypeSerivce.delete(Number(tipoVagaId)));
    } catch (error) {
      return res.status(409).send(error);
    }
  }
}
