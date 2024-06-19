export default interface IComment {
  avatar: string;
  name: string;
  content: string;
  comments: IComment[];
  createdDate: string;
}
