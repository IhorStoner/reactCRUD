import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <Segment inverted style={{ borderRadius: 0 }}>
        <Menu inverted pointing secondary>
          <Link data-testid='link' to={'/'}>
            <Menu.Item name='Users' active={pathname === '/'} />
          </Link>
          <Link data-testid='link' to={'/create'}>
            <Menu.Item name='Create New User' active={pathname === '/create'} />
          </Link>
        </Menu>
      </Segment>
    </header>
  );
};

export default Header;
