module.exports = function check(str, bracketsConfig) {
    let arr=str.split('');
    let mas=[];
    let brackets={}, sm={};
    for (let key of bracketsConfig) {
        if(key[0]==key[1]){
            sm[key[0]]=0;
            continue;
        }
        brackets[key[0]]=key[1];
    }
    for(let item of arr) {
        if(item in sm ) { 
            if(sm[item]%2==0){
                sm[item]++;
                mas.push(item);
            }
            else {
                if(item!=mas.pop()) { 
                    return false;
                }
                else sm[item]++;
            }
            continue;
        }
        if( item in brackets) {
            mas.push(item);
            continue;
        }
        if(mas.length==0) return false;
        if(item!=brackets[mas.pop()]) { 
            return false;
        }
    }
    if(mas.length==0) {
        return true;
    }
    else return false;
}
