export let Label = {
  render({props}) {
    return element('p', {
      style: {
        color: props.color,
      },
    }, props.text)
  }
}
