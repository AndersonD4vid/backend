import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
   async handle(req: Request, res: Response) {
      const { email, password } = req.body;

      // inicializar serviço
      const authUserService = new AuthUserService();

      // executando o serviço
      const auth = await authUserService.execute({ email, password });

      return res.json(auth);
   }
}

export { AuthUserController };
