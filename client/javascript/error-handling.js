function exampleFunction() {
    try {
        let value = riskyOperation();
    } catch (error) {
        console.log("This is the end of the function"); 
    } finally {
        console.log('The try/catch block has finished executing');
    }
  
    console.log('This is the end of the function');
    
}

function riskyOperation() {
    throw new Error("This is an example");
}

exampleFunction()