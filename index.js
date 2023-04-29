var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
feet.addEventListener('input',function(){
    let f = this.value;
    let i = f*12;
    inch.value = i;
});
inch.addEventListener('input',function(){
    let f = this.value;
    let i = f/12;
    if(!Number.isInteger(i)){
        i = i.toFixed(2);
    };
    feet.value = i;
});