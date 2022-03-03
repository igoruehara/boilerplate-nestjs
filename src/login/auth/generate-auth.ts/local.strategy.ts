import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginService } from '../../services/core.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private service: LoginService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
    }

    async validate(email: string, password: string): Promise<any> {
        const user = await this.service.loginVerify(email, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}