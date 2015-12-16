import {render, tree} from 'deku'

import {App} from './app'

render(tree(element(App, {
  color: 'red',
  text: '好',
})), document.getElementById('app'))
