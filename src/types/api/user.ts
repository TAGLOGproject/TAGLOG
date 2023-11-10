export interface IUserData {
  birthday: string;
  birthday_type: string;
  created_at: string;
  email: string;
  isAdmin: boolean;
  nickname: string;
  profile_image: string;
  refreshToken: string;
  thumbnail_image: string;
  type: string;
  userid: string;
  __v: number;
  _id: string;
  // TODO: User Schema에 sns 추가
  // sns: {
  //   type: 'github' | 'linkedin' | 'mail';
  //   uri: string;
  // }[];
}
