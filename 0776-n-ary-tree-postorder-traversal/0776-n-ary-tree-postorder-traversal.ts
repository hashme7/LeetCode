/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
    let result = []
    postorderHelper(root,result);
    return result;
};
function postorderHelper(root:_Node | null,result:number[]){
    if(!root)return;
    for(let children of root.children){
        postorderHelper(children,result);
    }
    result.push(root.val);
}