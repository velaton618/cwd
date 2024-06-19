export interface IPostProps {
  subject: string;
  uploadDate: string;
  title: string;
  description: string;
  images: string[];
  viewsCount: string;
  commentsCount: string;
  comments: IComment[];
}
