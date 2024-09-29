import { ExceptionFilter, Catch, ArgumentsHost, BadRequestException } from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    console.error('Validation error:', exceptionResponse);

    response.status(status).json({
      statusCode: status,
      message: exceptionResponse['message'] || 'Validation failed',
      error: exceptionResponse['error'] || 'Bad Request',
    });
  }
}