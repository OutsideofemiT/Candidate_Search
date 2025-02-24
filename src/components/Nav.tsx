import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
      <nav>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="./pages/SavedCandidates.tsx" className={({ isActive }) => (isActive ? 'active' : '')}>Potential Candidates</NavLink></li>          
      </nav>
    );
  };
export default Nav;
