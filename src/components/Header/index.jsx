import { header } from './Header.module.css';

import igniteLogo from '../../assets/ignite-logo.svg';

export const Header = () => {
  return (
    <header className={header}>
      <img src={igniteLogo} alt="Ignite logo" />
      <strong>Ignite Feed</strong>
    </header>
  );
};