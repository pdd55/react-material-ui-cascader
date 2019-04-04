const global = 'this is a global variable';

window.test = (data) => {
  console.log(global);
  console.log(data);
  return global;
};
