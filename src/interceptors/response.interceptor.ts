/* eslint-disable prettier/prettier */
import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => ({
        error: false,
        errorMessage: null,
        code: response.statusCode || 200,
        response: data
      })),
      catchError((err) => {
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Erro interno no servidor. Tente novamente mais tarde ou contate o suporte.';

        if (err instanceof HttpException) {
          status = err.getStatus();
          message = err.message;
        }

        response.status(status).json({
          error: true,
          errorMessage: message,
          code: status,
          response: null
        })

        return new Observable();
      })
    );

  }
}
