import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Jane"
    },
    {
      id: 3,
      name: "Bob"
    },
    {
      id: 4,
      name: "Mary"
    }
  ]

  findOne(id: number) {
    console.log(id)
    return this.users.find(user => user.id === id);
  }
}
