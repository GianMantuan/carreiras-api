import { Request, Response } from "express";
import { container } from "tsyringe";

import JobOfferDeleteService from "../services/jobOffer/JobOfferDeleteService";
import JobOfferGetAllService from "../services/jobOffer/JobOfferGetAllService";
import JobOfferGetByIdService from "../services/jobOffer/JobOfferGetByIdService";
import JobOfferSaveService from "../services/jobOffer/JobOfferSaveService";

export default class JobOfferController {
  public async all(req: Request, res: Response): Promise<Response> {
    try {
      const jobOfferSerivce = container.resolve(JobOfferGetAllService);
      return res.send(await jobOfferSerivce.all());
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { curriculoId } = req.params;
    try {
      const jobOfferSerivce = container.resolve(JobOfferGetByIdService);
      return res.send(await jobOfferSerivce.getById(Number(curriculoId)));
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const jobOfferSerivce = container.resolve(JobOfferSaveService);
      return res.send(await jobOfferSerivce.add(req.body));
    } catch (error) {
      return res.status(409).send(error);
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { vagaId } = req.params;
    try {
      const jobOfferSerivce = container.resolve(JobOfferDeleteService);
      return res.send(await jobOfferSerivce.delete(Number(vagaId)));
    } catch (error) {
      return res.status(409).send(error);
    }
  }
}
