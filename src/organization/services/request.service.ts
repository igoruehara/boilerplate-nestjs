import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';


@Injectable()
export class RequestService {
    constructor(private httpService: HttpService) { }

    async request(id): Promise<any> {
        try {
            let payload: any = {
                url: `YOUR_URL`,
            }

            const { data }: any = await lastValueFrom(this.httpService.get(payload.url));
        } catch (error) {

        }

    }

}