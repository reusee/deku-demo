import {Label} from './label'

export let App = {
  render({props, state}) {
    return element(Label, {
      color: props.color,
      text: props.text,
    })
  }
}

