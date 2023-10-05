export class EmailRequest {
  constructor(
    private name: string,
    private email: string,
    private subject: string,
    private message: string
  ) {}
}
