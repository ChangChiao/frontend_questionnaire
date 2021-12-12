import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { menuState } from "../store/Menu";
import Icon from "../components/Icon";
import clsx from "clsx";
import styled from "@emotion/styled";
const MenuComp = styled.div`
  width: 240px;
  height: 100vh;
  color: #fff;
  padding-top: 50px;
  position: fixed;
  background-color: var(--purple);
  img {
    width: 150px;
    display: block;
    margin: auto;
  }
  .level1 {
    padding-top: 50%;
    li {
      cursor: pointer;
      &:hover {
        p {
          background: var(--purple_light);
        }
      }
      p {
        padding: 16px 0;
        display: flex;
        justify-content: center;
        color: #fff;
        &.active {
          background: var(--purple_light);
        }
        span {
          width: 40%;
          color: #fff;
          text-align: left;
        }
        i {
          display: block;
          width: 20%;
          color: #fff;
        }
      }
    }
  }
  .level2 {
    li {
      height: 36px;
      line-height: 36px;
      &.active {
        background: var(--purple_light);
      }
      &:hover {
        background: var(--purple_light);
      }
      span {
        color: #fff;
      }
      a {
        display: block;
        width: 100%;
        text-align: center;
      }
    }
  }
`;

function Menu() {
  const location = useLocation();
  const [nowActive, setNowActive] = useState();

  const list = useRecoilValue(menuState);

  const handleClick = (event, { id }) => {
    event.stopPropagation();
    setNowActive(id);
  };
  const ConditionalLink = ({ children, item }) => {
    const { path } = item;
    return path ? <Link to={path}>{children}</Link> : <>{children}</>;
  };

  useEffect(() => {
    const path = location.pathname;
    const target = list.find((vo) => vo.path === path);
    target && setNowActive(target.id);
    const subArr = list.filter((vo) => vo.subList);
    if (!target) {
      for (let value of subArr) {
        for (let item of value.subList) {
          if (item.path === path) {
            setNowActive(item.id);
            break;
          }
        }
      }
    }
    console.log("location.pathname", location.pathname);
  }, []);

  useEffect(() => {
    console.log("nowActive", nowActive);
  }, [nowActive]);

  return (
    <MenuComp>
      <Link to="/">
        <img src="/images/logo_log.png" alt="logo" />
      </Link>
      <ul className="level1">
        {list.map((item) => {
          return (
            <li
              key={item.id}
              onClick={(event) => {
                handleClick(event, item);
              }}
            >
              <ConditionalLink item={item}>
                <p className={clsx(nowActive === item.id && "active")}>
                  <Icon name={item.icon} />
                  <span>{item.name}</span>
                  {item.subList ? (
                    <Icon name={nowActive === item.id ? "up" : "down"} />
                  ) : (
                    <i></i>
                  )}
                </p>
              </ConditionalLink>
              {nowActive?.includes(item.id) && (
                <ul className="level2">
                  {item.subList &&
                    item.subList.map((vo) => {
                      return (
                        <li
                          onClick={(event) => {
                            handleClick(event, vo);
                          }}
                          key={vo.id}
                          className={clsx(nowActive === vo.id && "active")}
                        >
                          <ConditionalLink item={vo}>
                            <span>{vo.name}</span>
                          </ConditionalLink>
                        </li>
                      );
                    })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </MenuComp>
  );
}

export default Menu;
