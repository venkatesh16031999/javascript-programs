let arr = [2,7,9,2,1];

const find = (arr,index,amount) => {
    
    if(index>=arr.length){
        console.log(amount);
        return 0;
    }
    
    let skip = find(arr,index+1,amount);
    let one = find(arr,index+2,amount+arr[index]);
    
    
    let max = Math.max(one,skip);
    
}

find(arr,0,0);
