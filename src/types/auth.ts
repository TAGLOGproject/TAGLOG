export interface IUserTokenPayload {
  userid: number;
  email: string;
}

export interface IUserInfo extends IUserTokenPayload {
  iat: number;
  exp: number;
}
