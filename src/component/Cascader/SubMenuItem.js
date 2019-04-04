import React from 'react';
import PropTypes from 'prop-types';
import {
  MenuItem,
} from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Menu from './Menu';

export default class SubMenuItem extends React.Component {
  static propTypes = {
    selectItemsChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    selectIndex: PropTypes.number.isRequired,
    menuItem: PropTypes.object.isRequired,
    selectItems: PropTypes.array.isRequired,
  }

  handleSubMenuItemClick = () => {
    const { menuItem, selectItemsChange, selectIndex } = this.props;
    selectItemsChange(menuItem, selectIndex);
  }

  handleSubMenuClose = (event) => {
    const { onClose } = this.props;
    if (!event) {
      onClose();
    }
  }

  render() {
    const {
      menuItem, selectItems, selectIndex, selectItemsChange,
    } = this.props;
    return (
      <React.Fragment>
        <MenuItem
          key={menuItem.value}
          onClick={this.handleSubMenuItemClick}
          selected={menuItem === selectItems[selectIndex]}>
          {menuItem.label}
          <ChevronRight color="disabled" className="rtf-cascader__icon--right" />
        </MenuItem>
        <Menu
          open={menuItem === selectItems[selectIndex]}
          menuItems={menuItem.children}
          onClose={this.handleSubMenuClose}
          selectIndex={(selectIndex + 1)}
          selectItems={selectItems}
          selectItemsChange={selectItemsChange} />
      </React.Fragment>
    );
  }
}
