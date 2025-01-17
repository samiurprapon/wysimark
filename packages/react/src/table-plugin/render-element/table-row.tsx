import { ConstrainedRenderElementProps } from "~/src/sink"

import { TableRowElement } from "../types"
import { $TableRow } from "./styled"

export function TableRow({
  attributes,
  children,
}: ConstrainedRenderElementProps<TableRowElement>) {
  return <$TableRow {...attributes}>{children}</$TableRow>
}
