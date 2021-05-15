import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (user) {
      console.log(user);
      this.usersRepository.turnAdmin(user);
      console.log(user);
      return user;
    }
    throw new Error(" User Not Found!");
  }
}

export { TurnUserAdminUseCase };
