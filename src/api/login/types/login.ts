export interface LoginRequestData {
  username: "admin" | "editor";
  password: string;
  code: string;
}
