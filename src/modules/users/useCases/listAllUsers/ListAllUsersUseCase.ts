import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAdminVerification = this.usersRepository.findById(user_id);

    if (userAdminVerification.admin === true) {
      const allUsers = this.usersRepository.list();
      return allUsers;
    }
    throw new Error("You do not have permission");
  }
}

export { ListAllUsersUseCase };
