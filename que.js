//Q.prob01

let reverse='';
    for(let i=N-1;i>=0;i--){
        reverse+=str[i];
    }if(reverse==str){
        console.log("Yes"); 
    }else{
        console.log("No");
    }

}


Q.prob02
   let prime=false;
    for(let i=2;i<num;i++){
        if(num%i!=0){
            prime=true;
        }
    }
    if (prime!=false){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
