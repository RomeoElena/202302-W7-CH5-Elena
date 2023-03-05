export interface CustomError extends Error {
  statusCode: number;
  statusMessage: string;
}

export class HTTPError extends Error implements CustomError {
  constructor(
    // eslint-disable-next-line no-unused-vars
    public statusCode: number,
    // eslint-disable-next-line no-unused-vars
    public statusMessage: string,
    public message: string,
    public options?: ErrorOptions
  ) {
    super(message, options);
    this.name = 'HTTPError';
  }
}
