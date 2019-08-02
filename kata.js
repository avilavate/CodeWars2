/*jshint esversion: 6 */

function sumStrings(a,b) { 
    console.log("Called");
if(!isNaN(new Number(a)) && !isNaN(new Number(a))){
    let aNum=a.split("");
    let bNum=b.split("");
  //  console.log(aNum.length + " "+ bNum.length);
   let leading0= aNum.length<bNum.length?bNum.length-aNum.length:aNum.length-bNum.length;
   let leading0Str='';
   for (let index = 0; index <leading0; index++) {
      leading0Str+="0";
    }

    let newOpr=aNum.length<bNum.length?()=>{
      let temp= new Number(leading0Str+ a);
      return temp+new Number(b);
    }:
        ()=>{
         let temp= new Number( leading0Str+b);
         return temp+new Number(a);
        };
   // console.log(leading0Str);
    console.log(newOpr().toLocaleString());
  
}
 
 //return isNaN(new Number(a)) && isNaN(new Number(a))?null:new String( new Number(a)+ new Number (b));
}


sumStrings('1268768768763','1');