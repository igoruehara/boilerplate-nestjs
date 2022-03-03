import { BadRequestException, forwardRef, Inject, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CriptService } from '../utils/bcrypt.service';
import { Service as UserService } from '../users/services/core.service';
import { LocalAuthGuard } from '../auth/generate-auth.ts/local-auth.guard';

@Injectable()
export class LoginService {
  constructor(
    private criptService: CriptService,
    private jwtService: JwtService,
    private service: UserService) { }

  async login(user: any): Promise<any> {
    try {
      const userFindDb = await this.service.findOneByEmail(user.email.toLowerCase())
      const payload = { id: user.id, email: user.email, role: userFindDb[0].role };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      console.log(error)
    }
  }

  async loginVerify(email: string, password: string): Promise<any> {
    const userFindDb = await this.service.findOneByEmail(email.toLowerCase())
    if (userFindDb.length === 0) {
      throw new BadRequestException('Usuário não localizado!')
    }

    const comparePassword = await this.criptService.decript(password, userFindDb[0].password)
    if (comparePassword === false) {
      throw new UnauthorizedException('Unauthorized')
    }
    return { id: userFindDb[0]._id, email: userFindDb[0].email, role: userFindDb[0].role }
  }

  async jwtVerify(token: string): Promise<any> {
    const verify = await this.jwtService.verifyAsync(token)
    return verify
  }
}
