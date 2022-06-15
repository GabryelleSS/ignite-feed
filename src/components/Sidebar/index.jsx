import { sidebar, cover, profile } from './styles.module.css';
import { AiOutlineEdit } from "react-icons/ai";

export const Sidebar = () => {
  return (
    <aside className={sidebar}>
      <img 
        className={cover}
        src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />
      <div className={profile}>
        <strong>Gabryelle Silva</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <AiOutlineEdit />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};