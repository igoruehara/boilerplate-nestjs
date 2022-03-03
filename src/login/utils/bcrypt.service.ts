import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt"

@Injectable()
export class CriptService {
    async password(password: string): Promise<string> {
        const hashedPass = await bcrypt.hash(password, 12)
        return hashedPass
    }

    async decript(password: string, comparePass: string): Promise<boolean> {
        return await bcrypt.compare(password, comparePass)
    }
}