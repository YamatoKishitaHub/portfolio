"use client";

import React from "react";
import Link from "next/link";

import { slide as Menu } from "react-burger-menu";

import { HeaderItemType } from "./Header";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "20px",
    top: "10px",
  },
  bmBurgerBars: {
    background: "#ffffff",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "50px",
    width: "50px",
    right: "25px",
    top: "5px",
  },
  bmCross: {
    background: "#ffffff",
    width: "5px",
    height: "40px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#ffffff",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  }
};

type HamburgerMenuProps = {
  headerItems: HeaderItemType[];
  pathname: string;
};

class HamburgerMenu extends React.Component<HamburgerMenuProps> {
  constructor (props: any) {
    super(props)
  }

  state = {
    isOpen: false
  };

  toggleState = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { headerItems, pathname } = this.props;

    return (
      <Menu
        isOpen={this.state.isOpen}
        onStateChange={(state) => this.setState({ isOpen: state.isOpen })}
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }
        right
        styles={ styles }
      >
        <ul>
          {headerItems.map((headerItem) => (
            <li key={headerItem.label} onClick={this.toggleState} className="mb-2">
              <Link href={headerItem.href} className="flex items-center gap-2">
                {headerItem.icon}
                <span className={`${headerItem.href === pathname ? "border-b-[2px]" : "hover:border-b-[2px]"}`}>
                  {headerItem.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Menu>
    );
  }
}

export default HamburgerMenu;
