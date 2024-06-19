import MobilePost from "../../components/MobilePost/MobilePost";
import Post from "../../components/Post/Post";
import { PostProps } from "../../components/Post/PostProps.interface";
import Side from "../../components/Side/Side";
import s from "./Feed.module.scss";

const Feed = () => {
  const post: PostProps = {
    subject: "Спортивная Борьба",
    uploadDate: "12 марта, 2024 в 16:03",
    title: "Илья Бессонов дал интервью для телеканала Россия-1",
    description:
      "Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал методики своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ...",
    images: [
      "src/assets/post/1.png",
      "src/assets/post/2.png",
      "src/assets/post/3.png",
      "src/assets/post/4.png",
      "src/assets/post/5.png",
      "src/assets/post/6.png",
    ],
    viewsCount: "4.1 K",
    commentsCount: "4",
  };

  return (
    <div className={s.feed}>
      <MobilePost
        subject={post.subject}
        uploadDate={post.uploadDate}
        title={post.title}
        description={post.description}
        images={post.images}
        viewsCount={post.viewsCount}
        commentsCount={post.commentsCount}
      />
      <Post
        subject={post.subject}
        uploadDate={post.uploadDate}
        title={post.title}
        description={post.description}
        images={post.images}
        viewsCount={post.viewsCount}
        commentsCount={post.commentsCount}
      />
      <Side />
    </div>
  );
};

export default Feed;
