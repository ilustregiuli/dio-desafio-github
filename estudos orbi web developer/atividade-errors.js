

const myArray = [0,1,2,3,4,5,6,7,8,9];

function testArray(xArray,numMembers){

    try {
        if(xArray === undefined || numMembers === undefined)
            throw new ReferenceError('Parâmetros não preenchidos.');
        
        if(typeof(xArray) !== 'object')
            throw new TypeError('Esse array não é um objeto.');

        if(typeof(numMembers) !== 'number')
            throw new TypeError('Este não é um número.');

        if(xArray.length !== numMembers) 
            throw new RangeError('Tamanho do array está diferente do informado.');   
            
        return xArray;

    } catch (e) {
        if(e instanceof ReferenceError)
            console.log(e.message);
        if(e instanceof TypeError)
            console.log(e.message);    
        if(e instanceof RangeError)
            console.log(e.message);          
    }

   
}

console.log(testArray(myArray,10));
