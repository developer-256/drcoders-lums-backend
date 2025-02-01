import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    return this.authService.login(user);
  }

  @Post('register') // Separate register API
  async register(
    @Body()
    userData: CreateUserDto,
  ) {
    return this.authService.register(userData);
  }

  @Post('google') // Google login API
  async googleLogin(
    @Body()
    data: {
      email: string;
    },
  ) {
    return this.authService.googleLogin(data.email);
  }

  @Post('protected')
  @UseGuards(JwtAuthGuard)
  getProtectedData(@Request() req) {
    console.log('Req ', req.user);

    return {
      message: `Hello ${req}, this is a protected route.`,
    };
  }
}
