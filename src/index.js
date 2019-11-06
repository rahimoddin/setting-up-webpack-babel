import {square} from './utils/utils'


function component() {
    const element = document.createElement('div');
  
    element.innerHTML = square(2)//['Hello', 'webpack'].join(' ');
  
    return element;
  }
  
  document.body.appendChild(component());