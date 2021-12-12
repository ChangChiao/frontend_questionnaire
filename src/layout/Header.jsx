import React from "react";
import Icon from "../components/Icon";
import styled from "@emotion/styled";
const RedDot = styled.span`
  position: relative;
  &::after {
    content: "";
    background: red;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    right: -1px;
    top: -1px;
  }
`;

const HeaderComp = styled.header`
  margin: 0 auto;
  margin-bottom: 30px;
  position: fixed;
  top: 0;
  width: calc(100% - 240px);
  height: 100px;
  background: var(--gray_light);
  z-index: 998;
  left: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  &::before {
    width: 30px;
    height: 30px;
    content: "";
    clip-path: polygon(40% 0, 25% 6%, 15% 13%, 7% 24%, 0% 50%, 0 0);
    background: var(--purple);
    position: absolute;
    left: -1px;
    top: 0;
  }
  .wap {
    width: calc(100%);
  }

  .menu-list {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 50px;
    align-items: center;
    padding: 0 10px;
    &-item {
      cursor: pointer;
      margin: 0 4px;
      i {
        padding: 0 4px;
      }
      &:hover {
        color: var(--purple);
        i {
          color: var(--purple);
        }
      }
    }
  }
`;

function Header() {
  return (
    <HeaderComp>
      <div className="wap">
        <ul className="menu-list block">
          <li className="menu-list-item">
            <RedDot>
              <Icon name="envelope" />
            </RedDot>
            信件
          </li>
          <li className="menu-list-item">
            <RedDot>
              <Icon name="notification" />
            </RedDot>
            通知
          </li>
          <li className="menu-list-item">
            <Icon name="settings" />
            設置
          </li>
          <li className="menu-list-item">
            <Icon name="people" />
            6687899
          </li>
          <li className="menu-list-item">
            <Icon name="log-out" />
            登出
          </li>
        </ul>
      </div>
    </HeaderComp>
  );
}

export default Header;
