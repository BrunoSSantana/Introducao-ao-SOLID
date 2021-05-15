import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const allUser = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.status(200).json(allUser);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { ListAllUsersController };