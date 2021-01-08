// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let result = []
  helperFunction(root, result);
  console.log(result)
  return result;
}

const helperFunction = (root, res) => {
  if(root === null || undefined) {
    return;
  };

  res.push(root.value);
  helperFunction(root.left, res);
  helperFunction(root.right, res);
}

const tree = new BinaryTree(1)
tree.left = 2;
tree.left.left = 4;
tree.left.right = 5;

tree.left.right.left = 10;
//  tree.left.right.right = null;

//  tree.left.right.left.left = null;
//  tree.left.right.left.right = null;


tree.left.left.left = 8;
//  tree.left.left.left.left = null;
//  tree.left.left.left.right = null;

tree.left.left.right = 9;
//  tree.left.left.right.left = null;
//  tree.left.left.right.right = null;

tree.right = 3;
tree.right.left = 6;
//  tree.right.left.left = null;
//  tree.right.left.right = null;

tree.right.right = 7;
//  tree.right.right.left = null;
//  tree.right.right.right = null;


branchSums(tree);