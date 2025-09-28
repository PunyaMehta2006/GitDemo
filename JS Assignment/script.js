const onClick1 = () =>{
    const red=document.getElementById('color-1');
    red.style.backgroundColor="red";
}

const onClick2 = () =>{
    const blue=document.getElementById('color-2');
    blue.style.backgroundColor="blue";
}

const onClick3 = () =>{
    const green=document.getElementById('color-3');
    green.style.backgroundColor="green";
}

const onClick4 = () =>{
    const yellow=document.getElementById('color-4');
    yellow.style.backgroundColor="yellow";
}

const onClick5 = (event) =>{
    const name=document.getElementById('name').value;
    const greeting=document.getElementById('heading');
    greeting.innerText=`Hello, ${name} !`;
}