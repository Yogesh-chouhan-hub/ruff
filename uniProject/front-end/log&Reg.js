const register = document.querySelector('#Register');
register.addEventListener('click',()=>{
    document.querySelector('.container1').style.display='none';
    document.querySelector('.container2').style.display='flex';

})
const login = document.querySelector('#Login');
login.addEventListener('click',()=>{
    document.querySelector('.container2').style.display='none';
    document.querySelector('.container1').style.display='flex';

})