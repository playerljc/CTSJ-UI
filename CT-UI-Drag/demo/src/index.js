import DragFactory from './ctsj-ui-drag/drag.js';

window.onload = () => {
  DragFactory.create(document.getElementById('ct-drag'), {
    mode: 'clone',
    cloneClasses: ['cloneNode'],
    showMap: true,
  });
};
