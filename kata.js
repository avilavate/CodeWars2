/*jshint esversion: 6 */

function AddInfinity(op1, op2) {
    op1 = op1.reverse();
    op2 = op2.reverse();
    let hasil = 0, unitPlace; result = "";
    op1.forEach((element, index) => {
        let temp = new Number(element) + new Number(op2[index]) + Number(hasil);

        if (String(temp).length > 1) {
            hasil = String(temp).split("")[0];
            unitPlace = String(temp).split("")[1];

        }
        else {
            unitPlace = String(temp).split("")[0];
        }

        result += unitPlace;

    });
    return String(result).split("").reverse().join("");
}
//console.log(AddInfinity('10'.split(""),'101'.split("")));
function sumStrings(a, b) {
    if (!isNaN(new Number(a)) && !isNaN(new Number(a))) {
        let aNum = a.split("");
        let bNum = b.split("");

        let leading0 = aNum.length < bNum.length ? bNum.length - aNum.length : aNum.length - bNum.length;
        let leading0Str = '';
        for (let index = 0; index < leading0; index++) {
            leading0Str += "0";
        }

        let result = aNum.length < bNum.length ? () => {
            let temp = leading0Str + a;
            return { 'a': temp, 'b': b };
        } :
            () => {
                let temp = leading0Str + b;
                return { 'a': a, 'b': temp };
            };

        //console.log(newOpr().toLocaleString());
        return (result());
    }

    //return isNaN(new Number(a)) && isNaN(new Number(a))?null:new String( new Number(a)+ new Number (b));
}


let { a, b } = sumStrings('10000000000000000000000000000000000000000000', '1111');

console.log(AddInfinity(String(a).split(""),String(b).split("")));