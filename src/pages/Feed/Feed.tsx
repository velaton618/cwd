import MobilePost from "../../components/MobilePost/MobilePost";
import Post from "../../components/Post/Post";
import Side from "../../components/Side/Side";
import { IPostProps } from "../../types/IPostProps";
import s from "./Feed.module.scss";

const Feed = () => {
  const post: IPostProps = {
    subject: "Спортивная Борьба",
    uploadDate: "12 марта, 2024 в 16:03",
    title: "Илья Бессонов дал интервью для телеканала Россия-1",
    description:
      "Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал методики своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ...",
    images: [
      "post/1.png",
      "post/2.png",
      "post/3.png",
      "post/4.png",
      "post/5.png",
      "post/6.png",
    ],
    viewsCount: "4.1 K",
    commentsCount: "4",
    comments: [
      {
        name: "Вадим Давыдов",
        avatar: "avatars/1.png",
        content: "Наконец-то! Рад, что он вернулся в спорт",
        createdDate: "15 минут назад",
        comments: [
          {
            name: "Артем Еременко",
            avatar: "avatars/2.png",
            content: "Вадим, согласен! Уже давно ждал интервью!",
            createdDate: "30 секунд назад",
            comments: [],
          },
        ],
      },
      {
        name: "Виталий Бобов",
        avatar: "avatars/3.png",
        content: "Ура!",
        createdDate: "1 час назад",
        comments: [],
      },
    ],
  };
  return (
    <div className={s.feed}>
      <div className={s.posts}>
        <MobilePost
          subject={post.subject}
          uploadDate={post.uploadDate}
          title={post.title}
          description={post.description}
          images={post.images}
          viewsCount={post.viewsCount}
          commentsCount={post.commentsCount}
          comments={post.comments}
        />
        <MobilePost
          subject={post.subject}
          uploadDate={post.uploadDate}
          title={post.title}
          description={post.description}
          images={post.images}
          viewsCount={post.viewsCount}
          commentsCount={post.commentsCount}
          comments={post.comments}
        />

        <Post
          subject={post.subject}
          uploadDate={post.uploadDate}
          title={post.title}
          description={post.description}
          images={post.images}
          viewsCount={post.viewsCount}
          commentsCount={post.commentsCount}
          comments={post.comments}
        />
        <Post
          subject={post.subject}
          uploadDate={post.uploadDate}
          title={post.title}
          description={post.description}
          images={post.images}
          viewsCount={post.viewsCount}
          commentsCount={post.commentsCount}
          comments={post.comments}
        />
      </div>
      <Side />
    </div>
  );
};

export default Feed;
