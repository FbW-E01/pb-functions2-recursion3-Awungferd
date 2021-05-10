function fibon(number) {
    
    if (number ===1) {
        return [0,1]
        
    }
  if (number===0) {
        return [0]
        
    } 
    if (number<0) return "Not executable"
     else
    {
        let sequence = fibon(number - 1)
        sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2])
        return sequence
        //sequence.push(sequence.push[sequence.length -1 + sequence[sequence.length -2]] )
    }
}
console.log(fibon(-3))
console.log(fibon(0), ) 
 console.log(fibon(1), ) 
console.log( fibon(2), ) 
console.log( fibon(8), ) 
console.log( fibon(8), )
console.log(fibon(16))
