/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if(root == null)return null;
    if(root.val<low){
        return rangeSumBST(root.right,low,high);
    }else if(root.val>high){
        return rangeSumBST(root.left,low,high);
    }else{
        return root.val + rangeSumBST(root.right,low,high) + rangeSumBST(root.left,low,high);
    }
};
