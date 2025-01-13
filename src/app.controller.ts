import { Controller, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { json, send } from 'micro';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(@Req() req: Request) {
    console.log(req)
    return {...req.body,  response: {text: 'Привет мир'},}
  }
}
