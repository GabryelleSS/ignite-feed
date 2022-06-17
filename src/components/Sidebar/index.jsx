import { 
  sidebar, 
  cover, 
  profile, 
  avatar, 
  userName,
  userProfession,
  footer,
  editProfileBtn,
} from './styles.module.css';
import { AiOutlineEdit } from "react-icons/ai";

export const Sidebar = () => {
  return (
    <aside className={sidebar}>
      <img 
        className={cover}
        src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />
      
      <div className={profile}>
        <img 
          className={avatar}
          src="https://github.com/GabryelleSS.png" 
        />
        <strong className={userName}>Gabryelle Silva</strong>
        <span className={userProfession}>Web Developer</span>
      </div>

      <footer
        className={footer}
      >
        <a href="#" className={editProfileBtn}>
          <AiOutlineEdit />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};