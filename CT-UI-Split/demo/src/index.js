import SplitFactory from './ct-ui-split/split.js';

window.onload = () => {
  SplitFactory.create(document.getElementById('ct-split-h'), {
    direction: /* 'horizontal' */ 'vertical',
    minBlankWidth: 100,
    minBlankHeight: 100,
    onCanMove: (direction) => {
      // console.log('onCanMove', direction);
    },
    onMove: (direction, value) => {
      // console.log('onMove', direction, value);
    },
    onSuccess: () => {
      // console.log('onSuccess');
    },
  });

  SplitFactory.create(document.getElementById('ct-split-v'), {
    direction: 'horizontal', /* 'vertical', */
    minBlankWidth: 100,
    minBlankHeight: 100,
  });

  SplitFactory.create(document.getElementById('leftSplit'), {
    direction: 'vertical',
  });

  SplitFactory.create(document.getElementById('rightSplit'), {
    direction: 'horizontal',
  });
};
