import { Controller, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { json, send } from 'micro';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(@Req() req: any, @Res() res: Response) {
    console.log(req, res)
    return {
      version: 1,
      // session: req.session,
      response: {
        text: 'test',
        // end_session: req.end_session
      }
    }
  }
}
