import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {

  constructor(private authService: AuthService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
    
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth')
  async getProfile(@Request() req) {
    return req.user;
  }

  @Post('/recuperar-senha')
  async recuperarSenhaEmail(@Body() user) {
    return this.authService.recuperarSenha(user.email);
  }
}