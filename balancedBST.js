class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function sortedListToBST(head) {
    if (!head) return null;
  
    function findSize(head) {
      let size = 0;
      while (head) {
        size++;
        head = head.next;
      }
      return size;
    }
  
    let size = findSize(head);
    let current = head;
  
    function convertListToBST(start, end) {
      if (start > end) return null;
  
      let mid = Math.floor((start + end) / 2);
      let left = convertListToBST(start, mid - 1);
  
      let node = new TreeNode(current.val);
  
      current = current.next;
  
      let right = convertListToBST(mid + 1, end);
      node.left = left;
      node.right = right;
  
      return node;
    }
  
    return convertListToBST(0, size - 1);
  }
  
  // Example :
  let head = new ListNode(-10);
  head.next = new ListNode(-3);
  head.next.next = new ListNode(0);
  head.next.next.next = new ListNode(5);
  head.next.next.next.next = new ListNode(9);
  
  let treeRoot = sortedListToBST(head);
  console.log(treeRoot);
  