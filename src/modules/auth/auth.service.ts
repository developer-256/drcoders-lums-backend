import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  private users = [
    { id: 1, username: 'test', password: bcrypt.hashSync('password', 10) },
  ];

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = this.users.find((user) => user.username === username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  // Register new user
  async register(userData: CreateUserDto) {
    const user = await this.userService.createUser(userData);
    const token = this.jwtService.sign({
      id: user.userID,
      name: user.name,
      email: user.email,
      role: user.role,
    });
    return { token };
  }

  // Google  login

  async googleLogin(email: string) {
    let user = await this.userService.findByEmail(email);

    if (!user) {
      throw NotFoundException;
    }

    const token = this.jwtService.sign({
      id: user.userID,
      name: user.name,
      email: user.email,
      role: user.role,
    });
    return { token };
  }

  // Simple email password login
  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
