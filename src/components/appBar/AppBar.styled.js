import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 20px;
  border-bottom: solid 1px grey;
  box-shadow: 0 0 13px 3px grey;

  > nav {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: #ffff00;
  }
`;

export const Main = styled.main`
  padding: 20px;
`;