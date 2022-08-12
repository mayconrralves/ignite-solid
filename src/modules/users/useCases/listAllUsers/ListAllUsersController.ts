import { Request, Response } from "express";

import { IRequest, ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    try {
      const users = this.listAllUsersUseCase.execute({ user_id } as IRequest);
      return response.json(users);
    } catch (error) {
      return response.status(400).json({
        error: {
          msg: error.message,
        },
      });
    }
  }
}

export { ListAllUsersController };
