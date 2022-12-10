import { Editor } from "slate"

import { curry } from "~/src/sink"

import { getTableInfo } from "./get-table-info"
import { insertColumnLeft, insertColumnRight } from "./insert-column"
import { insertRowAbove, insertRowAt, insertRowBelow } from "./insert-row"
import { down, up } from "./navigation"
import { removeRow } from "./remove-row"
import { removeTable } from "./remove-table"
import { tabBackward, tabForward } from "./tab"

export function createTableMethods(editor: Editor) {
  return {
    getTableInfo: curry(getTableInfo, editor),
    insertColumnLeft: curry(insertColumnLeft, editor),
    insertColumnRight: curry(insertColumnRight, editor),
    insertRowAt: curry(insertRowAt, editor),
    insertRowAbove: curry(insertRowAbove, editor),
    insertRowBelow: curry(insertRowBelow, editor),
    removeTable: curry(removeTable, editor),
    removeRow: curry(removeRow, editor),
    tabForward: curry(tabForward, editor),
    tabBackward: curry(tabBackward, editor),
    down: curry(down, editor),
    up: curry(up, editor),
  }
}