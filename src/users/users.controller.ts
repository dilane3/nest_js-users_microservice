import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';

type Article = {
  id: number;
  title: string;
  description: string;
  authorId: number;
};

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'findOne' })
  findOne(@Payload('articles') articles: Article[]) {
    const myArticles = [];

    for (let article of articles) {
      const author = this.usersService.findOne(article.authorId);

      myArticles.push({
        ...article,
        author,
        authorId: undefined,
      });
    }

    console.log(myArticles);

    return myArticles;
  }
}
