export const getPageHeight = (state, getters) => {
  return window.innerHeight + 'px'
};

export const getContentHeight = (state, getters) => {
  return (window.innerHeight - 53) + 'px'
};
