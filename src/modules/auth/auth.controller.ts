import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    console.log('JWT_SECRET:', process.env.JWT_SECRET);

    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    return this.authService.login(user);
  }

  @Post('protected')
  @UseGuards(JwtAuthGuard)
  getProtectedData(@Request() req) {
    return {
      message: `Hello ${req.user.username}, this is a protected route.`,
    };
  }
}
