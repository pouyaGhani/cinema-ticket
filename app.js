const seats=document.querySelectorAll('#seat');
const movie=document.querySelector('select');
const spans=document.querySelectorAll('span');
let moviePrice=0;
function checkOptions(){
    if(movie.value==1){
        moviePrice=30;
    }
    else if(movie.value==2){
        moviePrice=34;
    }
    else if(movie.value==3){
        moviePrice=27;
    }
    else{
        moviePrice=20;
    }
}
checkOptions();
console.log(moviePrice);
movie.addEventListener('change',checkOptions);
let seatNum=0;

seats.forEach(seat =>{
    if(seat.className=='occupied'){return;}
    seat.addEventListener('click',() =>{
        if(seat.className=='selected'){
            seat.className='empty'
            seatNum--;
            spans[0].textContent=seatNum;
            spans[1].textContent=seatNum*moviePrice;
        }
        else{
            seat.className='selected';
            seatNum++;
            spans[0].textContent=seatNum;
            spans[1].textContent=seatNum*moviePrice+'$';
        }
    });
})