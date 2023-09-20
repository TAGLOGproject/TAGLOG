export interface KakaoTokenResponse {
  token_type: string;
  access_token: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  refresh_token_expires_in: string;
  scope: string;
}

export interface KakaoUserInfo {
  id: number;
  connected_at: string;
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
  kakao_account: {
    profile_nickname_needs_agreement: boolean;
    profile_image_needs_agreement: boolean;
    profile: any;
    has_email: boolean;
    email_needs_agreement: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
    email: string;
    has_birthday: boolean;
    birthday_needs_agreement: boolean;
    birthday: string;
    birthday_type: 'SOAR' | 'LUNAR';
  };
}
