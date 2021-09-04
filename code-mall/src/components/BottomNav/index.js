import React, { Component } from "react";
import styles from "./index.module.scss";

const menu = [
  {
    title: "Home",
    icon: "home",
    link: "/",
  },
  {
    title: "Cart",
    icon: "cart",
    link: "/cart",
  },
  {
    title: "List",
    icon: "list",
    link: "/orderlist",
  },
  {
    title: "User",
    icon: "ui-user",
    link: "/user",
  },
];

export default class BottomNav extends Component {
  render() {
    const { activeNum, setActiveNum } = this.props;
    return (
      <div className={styles.main}>
        {menu.map((item, index) => (
          <MenuItem
            key={item.link}
            {...item}
            active={activeNum === index}
            onClick={() => setActiveNum(index)}
          />
        ))}
      </div>
    );
  }
}

function MenuItem({ title, icon, active, onClick }) {
  return (
    <div
      className={(active ? styles.selected + " " : "") + styles.menuItem}
      onClick={onClick}
    >
      <span className={"iconfont icofont-" + icon}></span>
      <span className={styles.title}>{title}</span>
    </div>
  );
}
