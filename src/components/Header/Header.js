import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { COLORS, FAMILIES, QUERIES, WEIGHTS } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <UserActionGroup>
          <UserWrapper>
            <SubscribeButton>Subscribe</SubscribeButton>
            <LoginLink>Already a subscriber?</LoginLink>
          </UserWrapper>
        </UserActionGroup>
      </MainHeader>
    </header>
  );
};

const SubscribeButton = styled(Button)`
text-transform: uppercase;
font-family: ${FAMILIES.sansSerif};
font-size: ${16 / 16}rem;
font-weight: ${WEIGHTS.bold}
line-height: ${18.4 / 16}rem;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px 0;
`;

const LoginLink = styled.a`
  color: ${COLORS.gray[900]};
  font-family: ${FAMILIES.serif};
  font-size: ${14 / 16}rem;
  font-style: italic;
  text-decoration: underline;
  line-height: ${22 / 16}rem;
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  ${MainHeader} & {
    display: none;
  }

  @media ${QUERIES.laptopAndUp} {
    ${MainHeader} & {
      display: flex;
    }
  }
`;

const UserActionGroup = styled(ActionGroup)`
  justify-self: end;
  align-self: end;
`;

export default Header;
