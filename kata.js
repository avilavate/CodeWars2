/*jshint esversion: 6 */

function AddInfinity(op1, op2) {
    op1=op1.reverse();
    op2=op2.reverse();
    let hasil = 0, unitPlace;result="";
    op1.forEach((element, index) => {
        let temp = new Number(element) + new Number(op2[index]) +Number(hasil);
        console.log(temp);
        if(String(temp).length>1){
            hasil=String(temp).split("")[0];
            unitPlace=String(temp).split("")[1];
        }
        else{
            unitPlace=String(temp).split("")[0];
        }
        console.log(hasil+ " "+unitPlace);
        result+=unitPlace;
    });
}
console.log(AddInfinity('9'.split(""),'9'.split("")));
function sumStrings(a, b) {
    console.log("Called");
    if (!isNaN(new Number(a)) && !isNaN(new Number(a))) {
        let aNum = a.split("");
        let bNum = b.split("");
        //  console.log(aNum.length + " "+ bNum.length);
        let leading0 = aNum.length < bNum.length ? bNum.length - aNum.length : aNum.length - bNum.length;
        let leading0Str = '';
        for (let index = 0; index < leading0; index++) {
            leading0Str += "0";
        }

        let newOpr = aNum.length < bNum.length ? () => {
            let temp = new Number(leading0Str + a);
            temp = String(temp).split("");
            return AddInfinity(temp, b.split(""));
        } :
            () => {
                let temp = new Number(leading0Str + b);
                return temp + new Number(a);
            };
        // console.log(leading0Str);
        console.log(newOpr().toLocaleString());

    }

    //return isNaN(new Number(a)) && isNaN(new Number(a))?null:new String( new Number(a)+ new Number (b));
}


sumStrings('1268768768763', '1');