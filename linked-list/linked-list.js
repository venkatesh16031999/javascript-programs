class Node {
    constructor(data){
        this.data = data;   
        this.next = null;
    }
}

class LL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    add(value){
        let newNode = new Node(value);
        if(this.head==null){
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
        }
        
        this.head = newNode;
        this.size++;
    }
    
    print(){
        let cur = this.head;
        
        while(cur!=null){
            console.log(cur.data);
            cur = cur.next;
        }
        
    }
    
}

let ll = new LL();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.print();

