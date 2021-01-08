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
tree.left.value = 2;
tree.left.left.value = 4;
tree.left.right.value = 5;

tree.left.right.left.value = 10;
//  tree.left.right.right.value = null;

//  tree.left.right.left.left.value = null;
//  tree.left.right.left.right.value = null;


tree.left.left.left.value = 8;
//  tree.left.left.left.left.value = null;
//  tree.left.left.left.right.value = null;

tree.left.left.right.value = 9;
//  tree.left.left.right.left.value = null;
//  tree.left.left.right.right.value = null;

tree.right.value = 3;
tree.right.left.value = 6;
//  tree.right.left.left.value = null;
//  tree.right.left.right.value = null;

tree.right.right.value = 7;
//  tree.right.right.left.value = null;
//  tree.right.right.right.value = null;


branchSums(tree);