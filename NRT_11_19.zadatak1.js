const math=require("mathjs")

function proba(){
    console.log(`${math.derivative('3*(x^3)-x^2','x')}`)
    console.log(math.acot(35))
    console.log(math.min(4,-5,1,10))
}
exports.proba
proba()
