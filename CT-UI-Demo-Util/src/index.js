import hljs from 'highlight.js/lib/index';

export default {
  initial() {
    const $code = document.getElementsByClassName('html');
    for (let i = 0; i < $code.length; i++) {
      const element = $code[i];
      element.innerText = element.innerHTML;
    }

    hljs.initHighlightingOnLoad();
  },
};
