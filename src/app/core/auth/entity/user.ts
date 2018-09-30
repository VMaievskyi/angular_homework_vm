export class User {
  constructor(
    public name: string = '',
    public surname: string = '',
    public token: string = null,
    public skill: string = "",
    public contactInfo:string=""
  ) {}

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}
