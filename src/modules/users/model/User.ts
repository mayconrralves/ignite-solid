import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  id: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
    this.admin = false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
  public changeAdmin(): void {
    this.admin = !this.admin;
    this.updated_at = new Date();
  }
}
export { User };
