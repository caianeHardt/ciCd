import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWordService {
    returnHello(): Promise<string> {
        return Promise.resolve('Hello, World!');
    }
}