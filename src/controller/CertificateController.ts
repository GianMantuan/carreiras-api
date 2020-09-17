import { Request, Response } from "express";
import { container } from "tsyringe";

import CertificateDeleteService from "../services/certificate/CertificateDeleteService";
import CertificateGetAllService from "../services/certificate/CertificateGetAllService";
import CertificateGetByIdService from "../services/certificate/CertificateGetByIdService";
import CertificateSaveService from "../services/certificate/CertificateSaveService";

export default class CertificateController {
  public async all(req: Request, res: Response): Promise<Response> {
    try {
      const certificateService = container.resolve(CertificateGetAllService);
      return res.send(await certificateService.all());
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { curriculoId } = req.params;

    try {
      const certificateService = container.resolve(CertificateGetByIdService);
      return res.send(await certificateService.getById(Number(curriculoId)));
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const certificateService = container.resolve(CertificateSaveService);
      return res.send(await certificateService.add(req.body));
    } catch (error) {
      return res.status(409).send(error);
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { certificadoId } = req.params;
    try {
      const certificateService = container.resolve(CertificateDeleteService);
      return res.send(await certificateService.delete(Number(certificadoId)));
    } catch (error) {
      return res.status(409).send(error);
    }
  }
}
