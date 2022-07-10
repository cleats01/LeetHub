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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let result = false;
    
    const sum = (node, total = 0) => {
        if(!node) return false;
        
        let current = total + node.val;
        
        sum(node.left, current);
        sum(node.right, current);
        
        if(!node.left && !node.right && current === targetSum) {
            result = true;
        };
    }
    
    sum(root);
    
    return result;
};