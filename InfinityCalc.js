/*jshint esversion: 6 */

function AddInfinity(a, b) {
    a = String(a).split("");
    b = String(b).split("");

    a = a.reverse();
    b = b.reverse();
    let hasil = 0, unitPlace; result = "";
    
    a.forEach((element, index) => {
        let temp = new Number(element) + new Number(b[index]) + Number(hasil);
        hasil='0';
        if (String(temp).length > 1) {
            hasil = String(temp).split("")[0];
            unitPlace = String(temp).split("")[1];

        }
        else {
            unitPlace = String(temp).split("")[0];
        }

        result += unitPlace;

    });
    if (hasil > 0) {
        result = String(hasil) + String(result).split("").reverse().join("");
    }
    else {
        result = String(result).split("").reverse().join("");
    }

    

    return result.replace(/^0+/, '');;
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

        return AddInfinity(result().a , result().b);
    }

    //return isNaN(new Number(a)) && isNaN(new Number(a))?null:new String( new Number(a)+ new Number (b));
}

/*
let { a, b } = sumStrings('999999999999999999999999999999999', '1');
console.log('999999999999999999999999999999999'.length);
console.log(AddInfinity(a, b), AddInfinity(a, b).length);
*/

console.log(sumStrings('8797', '45'));

//'8797', '45'
