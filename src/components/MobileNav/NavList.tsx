import "./scss/index.scss";

import * as React from "react";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { baseUrl } from "../../app/routes";
import NavItem, { INavItem } from "./NavItem";

import backImg from "../../images/arrow-back.svg";
// import logoImg from "../../images/logo.svg";
import logoImg from "../../images/logo.jpg";

import {
  Button, OverlayContext,
  OverlayTheme,
  OverlayType
} from "..";

interface NavListProps {
  items: INavItem[];
  user: any;
  hideOverlay(): void;
  signOut(): void;
}

interface NavListState {
  parent: INavItem | null;
  displayedItems: INavItem[];
}

class NavList extends React.PureComponent<NavListProps, NavListState> {
  state: NavListState = {
    displayedItems: this.props.items,
    parent: null,
  };

  handleShowSubItems = (item: INavItem) => {
    this.setState({ parent: item, displayedItems: item.children });
  };

  handleGoBack = () => {
    const grandparent = this.state.parent.parent;

    if (!grandparent) {
      this.setState({ parent: null, displayedItems: this.props.items });
    } else {
      const newParent = this.findItemById(grandparent.id);
      this.setState({
        displayedItems: newParent.children,
        parent: newParent,
      });
    }
  };

  findItemById(id: string): INavItem {
    let match = null;
    function find(item) {
      if (item.id === id) {
        match = item;
        return true;
      }
      return item.children && item.children.some(find);
    }
    this.props.items.some(find);
    return match;
  }

  render() {
    const { hideOverlay, signOut, user } = this.props;
    const { displayedItems, parent } = this.state;

    return (
      <OverlayContext.Consumer>

        {overlayContext => (
          <div>
            <ul>
              {parent ? (
                <li className="side-nav__menu-item side-nav__menu-item-back">
                  <span onClick={this.handleGoBack}>
                    <ReactSVG path={backImg} /> {parent.name}
                  </span>
                </li>
              ) : (
                  <>
                    <li className="side-nav__menu-item side-nav__menu-item--parent">
                      <Link
                        to={baseUrl}
                        className="side-nav__menu-item-logo"
                        onClick={hideOverlay}
                      >
                        {/* <ReactSVG path={logoImg} /> */}
                        <img src={logoImg} />
                      </Link>
                      <span className="side-nav__menu-item-close" onClick={hideOverlay}>
                        <span className="lineOne" />
                        <span className="lineTwo" />
                      </span>
                    </li>

                  </>
                )}
            </ul>
            <ul className="menu-list">
              {user ? (
                <li className="side-nav__menu-item">
                  <Link
                    to={baseUrl}
                    className="side-nav__menu-item-link"
                    onClick={hideOverlay}
                  >
                    Dashboard
              </Link>
                </li>
              ) : (
                  <Button onClick={() =>
                    overlayContext.show(
                      OverlayType.login,
                      OverlayTheme.right
                    )
                  }
                    className="regBtn"
                  >Signin or Register</Button>
                )}
              <Button className="bcBtn">Business Resource Center</Button>
              {displayedItems.map(item => (
                <NavItem
                  key={item.id}
                  hideOverlay={hideOverlay}
                  showSubItems={this.handleShowSubItems}
                  {...item}
                />
              ))}
            </ul>
            {user && 
            <div className="loBtn">
            <Button onClick={signOut}>Log Out</Button>
            </div>
            }

          </div>
        )}
      </OverlayContext.Consumer>
    );
  }
}

export default NavList;
