/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {
  MenuList,
  MenuItem,
  ClickAwayListener,
  Paper,
  Popper,
} from '@material-ui/core';
import SubMenuItem from './SubMenuItem';

export default class Menu extends React.Component {
  static propTypes = {
    selectItemsChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    selectIndex: PropTypes.number.isRequired,
    menuItems: PropTypes.array.isRequired,
    selectItems: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
  }

  handleMenuItemClick = (menuItem) => {
    const { selectItemsChange, onClose, selectIndex } = this.props;
    selectItemsChange(menuItem, selectIndex);
    onClose();
  }

  renderMenuItems = () => {
    const {
      menuItems, onClose, selectIndex, selectItems, selectItemsChange,
    } = this.props;
    return menuItems.map((menuItem) => {
      if (menuItem.children) {
        return (
          <SubMenuItem
            key={menuItem.value}
            menuItem={menuItem}
            onClose={onClose}
            selectIndex={selectIndex}
            selectItems={selectItems}
            selectItemsChange={selectItemsChange} />
        );
      }

      return (
        <MenuItem
          key={menuItem.value}
          onClick={() => this.handleMenuItemClick(menuItem)}
          selected={menuItem === selectItems[selectIndex]}>
          {menuItem.label}
        </MenuItem>
      );
    });
  };

  render() {
    const { anchorElement, open, onClose } = this.props;
    return (
      <Popper open={open} anchorEl={anchorElement} disablePortal placement="bottom-start" className="rtf-cascader__popper">
        <Paper>
          <ClickAwayListener onClickAway={onClose}>
            <MenuList>
              {this.renderMenuItems()}
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    );
  }
}
