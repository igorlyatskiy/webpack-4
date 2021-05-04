import * as _ from 'lodash';
import '../css/style.sass';
import '../css/main.sass';
import '../css/style.css';
import { a } from '../ts/error'
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(a);