import { FaRegTrashAlt } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { 
  comment,
  avatar,
  commentBox,
  commentContent,
  commentContentHeader,
  headerAuthor,
  headerTime,
  headerBtnDelete,
  commentContentText,
  commentFooter,
  footerBtnLike,
} from './styles.module.css';

export const Comment = () => {
  return (
    <div className={comment}>
      <img 
        className={avatar}
        src="https://github.com/GabryelleSS.png" 
      />

      <div className={commentBox}>
        <div className={commentContent}>
          <header className={commentContentHeader}>
            <div>
              <strong  className={headerAuthor}>Gabryelle Silva</strong>
              <time 
                dateTime="2022-05-11"
                title="11 de Maio às 08:13h"
                className={headerTime}
              >
                Certa de 1h atrás
              </time>
            </div>

            <button className={headerBtnDelete} title="Deletar comentário">
              <FaRegTrashAlt size={20} />
            </button>
          </header>

          <p className={commentContentText}>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer className={commentFooter}>
            <button className={footerBtnLike}>
              <BiLike />
              <p>Curtir<span>20</span></p>
            </button>
        </footer>
      </div>
    </div>
  );
};
