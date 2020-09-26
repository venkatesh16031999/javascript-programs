let str = "hello";

const set = new Set();
const queue = [];
queue.push(str);
set.add(str);

const isPalindrome = (str) => {
    let reversed = str.split("");
    let non = [...reversed];
    reversed.reverse();
    
    return reversed.toString() == non.toString();
}

common:
while(queue.length!=0){
    
    let size  = queue.length;
    
    while((size--)!=0){
        
        let temp = queue.shift();
        
        if(isPalindrome(temp)){
            console.log(temp);
            break common;
        }
        
        for(let i=0;i<temp.length;i++){
            let s = temp.substring(0,i)+temp.substring(i+1);
            
            if(!set.has(s)){
                set.add(s);
                queue.push(s);
            }
            
        }
        
    }
    
}




