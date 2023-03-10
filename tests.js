function first(){
    second();
    console.log(data[0]);
}

function second(){
    third();
    console.log(data[0] );
}


function third(){
    third();
    console.log( data[0]);    
}