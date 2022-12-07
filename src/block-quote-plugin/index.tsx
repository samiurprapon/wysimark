import React from "react"
import { Descendant } from "slate"

import { createPlugin } from "~/src/sink"

export type BlockQuoteEditor = {
  supportsBlockQuote: true
}

export type BlockQuoteElement = {
  type: "block-quote"
  children: Descendant[]
}

export type BlockQuotePluginCustomTypes = {
  Name: "block-quote"
  Editor: BlockQuoteEditor
  Element: BlockQuoteElement
}

export const BlockQuotePlugin = () =>
  createPlugin<BlockQuotePluginCustomTypes>((editor) => {
    editor.supportsBlockQuote = true
    return {
      name: "block-quote",
      editor: {
        isInline(element) {
          if (element.type === "block-quote") return false
        },
        isVoid(element) {
          if (element.type === "block-quote") return false
        },
      },
      editableProps: {
        renderElement: ({ element, attributes, children }) => {
          if (element.type === "block-quote") {
            return (
              <blockquote
                {...attributes}
                style={{
                  marginLeft: 0,
                  borderLeft: "0.5em solid #e0e0e0",
                  paddingLeft: "1em",
                }}
              >
                {children}
              </blockquote>
            )
          }
        },
      },
    }
  })