import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextService } from './next.service';

@Injectable()
export class NextMiddleware implements NestMiddleware {
  constructor(private readonly nextService: NextService) {}

  use(req: any, res: any) {
    const handle = this.nextService.getApp().getRequestHandler();
    handle(req, res);
  }
}
