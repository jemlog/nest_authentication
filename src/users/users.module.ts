import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  // userService를 export해야 authService에서 쓸 수있다.
  exports: [UsersService],
})
export class UsersModule {}
