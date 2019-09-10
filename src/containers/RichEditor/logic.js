// import R from 'ramda'
import { useEffect } from 'react'

import List from '@editorjs/list'
import Marker from '@editorjs/marker'
import Checklist from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import Header from '@groupher/editor-header'
import Quote from '@groupher/editor-quote'
import LinkTool from '@groupher/editor-link'

// import { TYPE, EVENT, ERR } from '@constant'
import { buildLog } from '@utils'

let store = null
/* eslint-disable-next-line */
const log = buildLog('L:RichEditor')

export const someMethod = () => {}

// const const cancleLoading = () => {}

// ###############################
// Data & Error handlers
// ###############################

// ###############################
// init & uninit
// ###############################

export const useInit = (_store, loaded) => {
  useEffect(() => {
    store = _store
    log('effect init: ', store)

    if (loaded) {
      // eslint-disable-next-line
      new EditorJS({
        /**
         * Id of Element that should contain Editor instance
         */
        holderId: 'codex-editor',
        tools: {
          header: Header,
          quote: Quote,
          list: {
            class: List,
            inlineToolbar: true,
          },
          marker: {
            class: Marker,
          },
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          delimiter: Delimiter,
          inlineCode: InlineCode,
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: 'http://localhost:4001/api/og-info',
            },
          },
        },
        data: {
          time: 1552744582955,
          blocks: [
            {
              type: 'paragraph',
              data: {
                text: 'this is @',
              },
            },
          ],
          version: '2.11.10',
        },
      })
    }

    return () => {
      // log('effect uninit')
    }
  }, [_store, loaded])
}
