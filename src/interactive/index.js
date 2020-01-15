import { addBodyClickHandler } from './addBodyClickHandler';
const bootstrap = () => {
  addBodyClickHandler();
};

try {
  bootstrap();
} catch (error) {
  document.addEventListener('DOMContentLoaded', bootstrap);
}
