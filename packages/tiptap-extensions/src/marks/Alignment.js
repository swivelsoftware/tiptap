import { Mark } from 'tiptap'
import { updateMark } from 'tiptap-commands'

export default class Alignment extends Mark {

  get name() {
    return 'aligntext'
  }

  get schema() {
    return {
      attrs: {
        align: {
          default: 'left',
        },
      },
      parseDOM: [
        {
          style: 'text-align',
          getAttrs: value => ({ align: value }),
        },
      ],
      toDOM: mark => ['span', { style: `text-align: ${mark.attrs.align}; display: block;` }, 0],
    }
  }

  commands({ type }) {
    return attrs => updateMark(type, attrs)
  }

}
