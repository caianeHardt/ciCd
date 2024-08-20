import { Controller, Get } from "@nestjs/common";
import { HelloWordService } from "../services/helloWord.service";
@Controller('welcome')
export class Welcome {
    constructor(
    private readonly helloWord: HelloWordService,
    ) {}

    @Get('/')
    async returnString(): Promise<string> {
        return this.helloWord.returnHello();
    }
}
