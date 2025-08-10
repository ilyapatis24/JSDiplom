import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthClientManagerGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    const roles = ['client', 'manager'];
    if (!user) {
      throw new UnauthorizedException('Пользователь не авторизован.');
    } else if (user && !roles.includes(user.role)) {
      throw new ForbiddenException(
        'Роль пользователя должна быть client или manager!',
      );
    }
    return user;
  }
}
