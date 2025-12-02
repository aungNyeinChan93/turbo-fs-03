import { type UserSession } from '@thallesp/nestjs-better-auth';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(session: UserSession) {
    return session;
  }
}
