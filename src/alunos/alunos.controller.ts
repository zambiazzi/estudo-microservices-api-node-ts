import { Request, Response } from 'express';
import AlunosReadService from './services/alunos.read.service';

const alunosReadService = new AlunosReadService(); 

export default class AlunosController {
  getManyAlunos = (request: Request, response: Response) => {
    const alunos = alunosReadService.getManyAlunos();
    return response.status(200).json(alunos);
  };
}
