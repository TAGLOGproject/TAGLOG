export default interface IUserData {
  name: string;
  subtitle: string;
  contents: string;
  avatar: string;
  sns: {
    type: 'github' | 'linkedin' | 'mail';
    uri: string;
  }[];
}
