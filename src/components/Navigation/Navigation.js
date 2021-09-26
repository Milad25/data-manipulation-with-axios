import { NavLink, withRouter } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const items = [
    { name: 'Home', to: '/', exact: true },
    { name: 'New Comment', to: '/new-comment' },
  ];

  return (
    <header>
      <nav className='navbar'>
        <ul className='navbar-list'>
          {items.map((item) => {
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className='link'
                  activeClassName='activeLink'
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
