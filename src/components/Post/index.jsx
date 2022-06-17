import { Comment } from '../Comment'
import {
  post,
  postHeader,
  author,
  avatar,
  authorInfo,
  authorName,
  authorCareer,
  headerTime,
  content,
  contentText,
  authorWebsite,
  hashtags,
  formComment,
  formCommentText,
  formCommentTextarea,
  formCommentFooter,
  formCommentButton,
  commentList
} from './styles.module.css';

export const Post = () => {
  return (
    <article className={post}>
      <header className={postHeader}>
        <div className={author}>
          <img 
            className={avatar}
            src="https://github.com/GabryelleSS.png" 
          />
          <div className={authorInfo}>
            <strong className={authorName}>Jane Cooper</strong>
            <span className={authorCareer}>Dev Front-end</span>
          </div>
        </div>
        <time 
          dateTime="2022-05-11"
          title="11 de Maio às 08:13h"
          className={headerTime}
        >
          Publicado há 1h
        </time>
      </header>

      <div className={content}>
        <p className={contentText}>Fala galeraa 👋</p>
        <p className={contentText}>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz 
          no NLW Return, evento da Rocketseat. 
          O nome do projeto é DoctorCare 🚀
        </p>
        <p className={contentText}>
          <a className={authorWebsite} href="">👉 jane.design/doctorcare</a>
        </p>
        <p className={contentText}>
          <a className={hashtags} href="">#novoprojeto</a>
          <a className={hashtags} href="">#nlw</a>
          <a className={hashtags} href="">#rocketseat</a>
        </p>
      </div>

      <form className={formComment}>
        <strong 
          className={formCommentText}
          >
            Deixe seu feedback
        </strong>
        <textarea 
          className={formCommentTextarea} 
          placeholder="Deixe um comentário" 
        />

        <footer className={formCommentFooter}>
          <button 
            className={formCommentButton} 
            type="submit">
              Publicar
          </button>
        </footer>
        
      </form>

      <div className={commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};