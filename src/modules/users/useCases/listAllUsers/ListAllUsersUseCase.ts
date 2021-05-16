import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/implementations/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user || user.admin === false) {
      throw new Error("sorry, but you not have permission");
    }
    const allUser = this.usersRepository.list();
    return allUser;
  }
}

export { ListAllUsersUseCase };
