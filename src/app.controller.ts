import { Controller, Get, Req, Res } from '@nestjs/common';
import { NextService } from './next/next.service';

@Controller()
export class AppController {
  constructor(private nextService: NextService) {}

  @Get()
  async getHello(@Req() req: any, @Res() res: any): Promise<void> {
    return await this.nextService.render('/', req, res);
  }
}
