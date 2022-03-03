import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';


@Injectable()
export class RequestService {
    constructor(private httpService: HttpService) { }

    async request(id): Promise<any> {
        try {
            let payload: any = {
                url: `${process.env.NLP_HOST}/virtual-assistant/${id}`,
            }

            const { data }: any = await this.httpService.get(payload.url).toPromise();
        } catch (error) {

        }

    }

}