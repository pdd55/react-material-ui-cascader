export default [
  {
    title: '基本展示',
    inputs: {
      options: [{
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
      }],
    },
  },
  {
    title: '有标题',
    inputs: {
      title: '输入框标题',
      options: [{
        label: '选项1',
        value: 'option1',
        children: [{
          label: '二级子选项1',
          value: 'suboption1',
        }, {
          label: '二级子选项2',
          value: 'suboption2',
        }],
      }, {
        label: '选项2',
        value: 'option2',
      }, {
        label: '选项3',
        value: 'option3',
      }],
    },
  },
  {
    title: '自定义提示文本',
    inputs: {
      title: '输入框标题',
      options: [{
        label: '选项1',
        value: 'option1',
        children: [{
          label: '二级子选项1',
          value: 'suboption1',
        }, {
          label: '二级子选项2',
          value: 'suboption2',
        }],
      }, {
        label: '选项2',
        value: 'option2',
      }, {
        label: '选项3',
        value: 'option3',
      }],
      placeholder: '请选择',
    },
  },
];
