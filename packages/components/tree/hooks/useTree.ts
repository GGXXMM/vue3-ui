import { Ref, unref, ref } from "vue"
import { ITreeNode } from "../src/tree-type"
import { generateInnerTree } from "../utils"

export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node)))
  return {
    innerData
  }
}
