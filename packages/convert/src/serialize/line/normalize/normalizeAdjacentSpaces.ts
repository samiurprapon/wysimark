import { isSpace, isText, NormalizeOptions } from "./index"

export function normalizeAdjacentSpaces({
  node: segment,
  nextNode: nextSegment,
  segments,
  index,
}: NormalizeOptions): boolean {
  if (!isText(segment) || !isSpace(segment)) return false
  if (!isText(nextSegment) || !isSpace(nextSegment)) return false
  segments.splice(index, 2, { text: `${segment.text}${nextSegment.text}` })
  return true
}
