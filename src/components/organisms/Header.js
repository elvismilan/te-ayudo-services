import Logo from '../atoms/Logo';
import Navbar from './Navbar';

export const Header = () => (
  <header className="flexCenter shadowHeader py-4 sm:py-6">
    <div className="container flexCenter">
      <Logo />
      <Navbar />
    </div>
  </header>
);

export default Header