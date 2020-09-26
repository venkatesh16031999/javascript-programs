class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    
    insert(value){
        if(this.root==null){
            this.root = new Node(value);
            
        }else{
            this.root = this.insertNode(this.root,value);
        }
    }
    
    insertNode(root,value){
 
        if(root.data == value){
            return root;
        }
        
        if(value < root.data){
            if(root.left==null){
                root.left = new Node(value);
            }else{
                root.left = this.insertNode(root.left,value);
            }
        }else{
            if(root.right==null){
                root.right = new Node(value);
            }else{
                root.right = this.insertNode(root.right,value);
            }
        }
       return root; 
    }
    
    printNode(root){
        if(root==null){
            return;
        }
        
        this.printNode(root.left);
        console.log(root.data);
        this.printNode(root.right);
        
    }
    
}


let bst = new BST();

bst.insert(1);
bst.insert(2);
bst.insert(56);
bst.insert(3);

bst.printNode(bst.root);



