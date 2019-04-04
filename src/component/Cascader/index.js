import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Menu from './Menu';
import './style.scss';

export default class RtfCascader extends React.Component {
  static defaultProps = {
    output: [],
  };

  static propTypes = {
    output: PropTypes.array.isRequired,
  };

  static componentConfig = {
    name: '级联选择器',
    inputs: [{
      key: 'title',
      description: '标题文本',
      defaultValue: '',
      schema: {
        type: 'string',
      },
    }, {
      key: 'options',
      description: '选项信息',
      defaultValue: [],
      schema: {
        items: {
          required: ['label', 'value'],
          properties: {
            label: {
              type: 'string',
            },
            value: {
              type: 'string',
            },
            children: {
              type: 'array',
              items: { $ref: '#/items' },
            },
          },
        },
        properties: {
          items: { $ref: '#/items' },
        },
      },
    }, {
      key: 'placeholder',
      description: '自定义提示文本',
      defaultValue: '',
      schema: {
        type: 'string',
      },
    }],
  }

  static options = [{
    label: '选项1',
    value: 'option1',
    children: [{
      label: '二级子选项1',
      value: 'suboption1',
      children: [{
        label: '三级子选项a',
        value: 'suboptiona',
      }, {
        label: '三级子选项b',
        value: 'suboptionb',
      }],
    }, {
      label: '二级子选项2',
      value: 'suboption2',
    }, {
      label: '二级子选项3',
      value: 'suboption3',
    }],
  }, {
    label: '选项2',
    value: 'option2',
  }, {
    label: '选项3',
    value: 'option3',
  }]


  constructor(props) {
    super(props);
    this.state = {
      anchorElement: null,
      selectItems: this.mapPropsToState(),
      selectIndex: 0,
    };
  }

  mapPropsToState= () => {
    const { output } = this.props;
    if (!output) {
      return [];
    }
    return this.mapOutputToSelectItems(RtfCascader.options, output);
  };

  mapOutputToSelectItems = (options, output, index = 0, selectItems = []) => {
    const currentOption = options.find(option => option.value === output[index]);
    selectItems.push(currentOption);
    if (currentOption && currentOption.children) {
      this.mapOutputToSelectItems(currentOption.children, output, index + 1, selectItems);
    }
    return selectItems;
  }

  handleMenuItemOpen = (event) => {
    this.setState({ anchorElement: event.currentTarget });
  };

  handleMenuItemClose = () => {
    this.setState({ anchorElement: null });
  };

  selectItemsChange = (selectItem, selectIndex) => {
    const { selectItems } = this.state;
    selectItems[selectIndex] = selectItem;
    this.setState({
      selectItems: selectItems.slice(0, (selectIndex + 1)),
    });
  }

  render() {
    const { anchorElement, selectItems, selectIndex } = this.state;
    const itemLabels = selectItems && selectItems.map(item => item && item.label).join('/');
    return (
      <div className="rtf-cascader">
        <Button
          onClick={this.handleMenuItemOpen}>
          <span>{itemLabels || '请选择'}</span>
          <ArrowDropDown color="disabled" className="rtf-cascader__icon--down" />
        </Button>
        <Menu
          open={Boolean(anchorElement)}
          anchorElement={anchorElement}
          menuItems={RtfCascader.options}
          onClose={this.handleMenuItemClose}
          selectIndex={selectIndex}
          selectItems={selectItems}
          selectItemsChange={this.selectItemsChange} />
      </div>
    );
  }
}
