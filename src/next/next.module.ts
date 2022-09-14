import { Module } from '@nestjs/common';
import next from 'next';
import { NextService } from './next.service';

@Module({
  providers: [NextService],
  exports: [NextService],
})
export class NextModule {
  constructor(private readonly nextService: NextService) {}

  public async prepare(options?: any) {
    console.log(process.cwd());
    const app = next(
      Object.assign(
        {
          dev: process.env.NODE_ENV !== 'production',
          dir: process.cwd(),
        },
        options || {},
      ),
    );
    return app.prepare().then(() => this.nextService.setApp(app));
  }
}
