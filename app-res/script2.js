import {script1} from './script1.js';

const script2 = {
  clickAction2() {
    script1.clickAction();
  },
}

document.querySelector('#btn').addEventListener('click', script2.clickAction2);