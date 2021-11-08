import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  // login을 하는 부분
  @UseGuards(LocalAuthGuard) // post로 보내면 useGuard 부분에서 localStrategy를 호출 , user가 반환되면 req.user에 자동으로 집어넣는다.
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log('인증성공');
    return req.user;
  }
}
