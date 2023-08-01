import { Request, Response } from "express";

import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
   async handle(req: Request, res: Response) {
      // recebendo os dados da requisição
      const { name, email, password } = req.body;

      // inicializa o serviço
      const createUserService = new CreateUserService();
      // executa o serviçoi
      const user = await createUserService.execute({ name, email, password });

      return res.json(user);
   }
}

export { CreateUserController };
