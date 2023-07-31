import Image from 'next/image';
import styles from './card.module.scss';

const cardList = [
  {
    id: 1,
    image: 'string',
    title: '제목',
    description: '내용입니다',
    createdAt: '2023년 7월 50일',
    CommentCnt: 10,
    likeCnt: 1,
    user: {
      userId: 'string',
      nickName: 'string',
      thumnail: 'string',
    },
    tag: {
      userId: 'string',
      nickName: 'string',
      thumnail: 'string',
    },
  },
  {
    id: 2,
    image: 'string',
    title: '제목',
    description: '내용입니다',
    createdAt: '2023년 7월 50일',
    CommentCnt: 3,
    likeCnt: 5,
    user: {
      userId: 'string',
      nickName: 'string',
      thumnail: 'string',
    },
    tag: {
      userId: 'string',
      nickName: 'string',
      thumnail: 'string',
    },
  },
  {
    id: 3,
    image: 'string',
    title: '제목',
    description: '내용입니다',
    createdAt: '2023년 7월 50일',
    CommentCnt: 6,
    likeCnt: 8,
    user: {
      userId: 'string',
      nickName: 'string',
      thumnail: 'string',
    },
    tag: {
      userId: 'string',
      nickName: 'string',
      thumnail: 'string',
    },
  },
  {
    id: 4,
    image: 'string',
    title: '제목',
    description: '내용입니다',
    createdAt: '2023년 7월 50일',
    CommentCnt: 12,
    likeCnt: 3,
    user: {
      userId: 'string',
      nickName: 'string',
      thumnail: 'string',
    },
    tag: {
      userId: 'string',
      nickName: 'string',
      thumnail: 'string',
    },
  },
  {
    id: 5,
    image: 'string',
    title: '제목',
    description: '내용입니다',
    createdAt: '2023년 7월 50일',
    CommentCnt: 9,
    likeCnt: 8,
    user: {
      userId: 'string',
      nickName: 'string',
      thumnail: 'string',
    },
    tag: {
      userId: 'string',
      nickName: 'string',
      thumnail: 'string',
    },
  },
];

function Card() {
  return (
    <div className={styles.cardListContainer}>
      <div className={styles.cardListWrapper}>
        {cardList.map((card) => (
          <div className={styles.card} key={card.id}>
            <div className={styles.cardImageWrapper}>
              <Image
                className={styles.image}
                src="https://velog.velcdn.com/images/ssori0421/post/a2df4fe0-7609-418e-9394-28987bcb2201/image.jpeg"
                alt="card"
                fill
              />
            </div>

            <h1 className={styles.title}>{card.title}</h1>
            <div className={styles.content}>{card.description}</div>
            <span>{card.createdAt}</span>
            <span>﹒</span>
            <span>{card.likeCnt}개의 댓글</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
