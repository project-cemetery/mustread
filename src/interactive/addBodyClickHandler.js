export const addBodyClickHandler = () => {
  document.addEventListener('click', () => {
    parent.postMessage('click-mustread', '*');
  });
};
