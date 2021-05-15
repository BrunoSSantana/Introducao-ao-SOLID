import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdminVerification = this.usersRepository.findById(user_id);
    if (!userAdminVerification.admin === true) {
      throw new Error("You do not have permission");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
