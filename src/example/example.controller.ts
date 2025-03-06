import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('example')
@Controller('example')
export class ExampleController {
  @Get()
  @ApiOperation({ summary: 'Get a simple message' })
  getExample() {
    return { message: 'Hello, this is a simple API without a database!' };
  }
}
