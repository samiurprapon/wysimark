import type { BlockContent } from "mdast"
import { Element } from "wysimark/src"

import { assertUnreachable } from "../utils"
import { parseBlockquote } from "./parse-blockquote"
import { parseCodeBlock } from "./parse-code-block"
import { parseHeading } from "./parse-heading"
import { parseHTML } from "./parse-html"
import { parseList } from "./parse-list"
import { parseParagraph } from "./parse-paragraph"
import { parseTable } from "./parse-table"
import { parseThematicBreak } from "./parse-thematic-break"

export function parseContents(contents: BlockContent[]): Element[] {
  const elements: Element[] = []
  for (const content of contents) {
    elements.push(...parseContent(content))
  }
  return elements
}

export function parseContent(content: BlockContent): Element[] {
  switch (content.type) {
    case "blockquote":
      return parseBlockquote(content)
    case "code":
      return parseCodeBlock(content)
    case "heading":
      return parseHeading(content)
    case "html":
      return parseHTML(content)
    case "list":
      return parseList(content)
    case "paragraph":
      return parseParagraph(content)
    case "table":
      return parseTable(content)
    case "thematicBreak":
      return parseThematicBreak()
  }
  assertUnreachable(content)
}