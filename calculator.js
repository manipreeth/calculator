function digit(value){
    const digit = value;
    document.getElementById("output").innerHTML+= digit; 
}


function clicked(i){
    const operators = ["+","-","x","/","%"];
    let num1 = parseInt(document.getElementById("output").innerHTML);
    document.getElementById("input").innerHTML = num1 +" "+operators[i];
    document.getElementById("output").innerHTML = " ";

    addition = () =>
    {
        result = () => 
        {
            let num1 = parseInt(document.getElementById("input").innerHTML); 
            let num2= parseInt(document.getElementById("output").innerHTML);
            const result = num1 + num2;
            document.getElementById("output").innerHTML = result;
            document.getElementById("input").innerHTML = " ";
        }
    }

    subtraction = () =>
    {
        result = () =>
        {
        let num1 = parseInt(document.getElementById("input").innerHTML); 
        let num2= parseInt(document.getElementById("output").innerHTML);
        const result = num1 - num2;
        document.getElementById("output").innerHTML = result;
        document.getElementById("input").innerHTML = " ";
        }
    }
    
    multiplication = () =>
    {
        result = () =>
        {
        let num1 = parseInt(document.getElementById("input").innerHTML); 
        let num2= parseInt(document.getElementById("output").innerHTML);
        const result = num1 * num2;
        document.getElementById("output").innerHTML = result;
        document.getElementById("input").innerHTML = " ";
        }
    }

    division = () =>
    {
        result = () =>
        {
        let num1 = parseInt(document.getElementById("input").innerHTML); 
        let num2= parseInt(document.getElementById("output").innerHTML);
        const result = num1 / num2;
        document.getElementById("output").innerHTML = result;
        document.getElementById("input").innerHTML = " ";
        }
    }

    percentage = () =>
    {
        result = () =>
        {
        let num1 = parseInt(document.getElementById("input").innerHTML); 
        let num2= parseInt(document.getElementById("output").innerHTML);
        const result = (num1 / num2) * 100;
        document.getElementById("output").innerHTML = result;
        document.getElementById("input").innerHTML = " ";
        }
    }
// let back = ()=>{
    
 //}
}

let erase= ()=>{ 
    document.getElementById("output").innerHTML = " ";
    document.getElementById("input").innerHTML = " ";
}