import home from '../assets/home.svg';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
 return (
  <header>
   <div className="py-3 bg-primary text-white">
    <Link to="/">
     <img src={home} height="57" width="80" alt="home"/>
    </Link>
    <h1 className="text-center">Financial Advisor</h1>
   </div>
  </header>
 );
}