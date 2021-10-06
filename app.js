const seats=document.querySelectorAll('#seat');
const movie=document.querySelector('select');
const spans=document.querySelectorAll('span');
let moviePrice=0;
let id1=-1,id2=-1;
let seatNum=0;



localStorage.removeItem( "chairs" );

let chairs=JSON.parse(localStorage.getItem('chairs'));
if(chairs==null)
{
    chairs=new Array(60);
    chairs.forEach(function(chair){
        chair=0;
    });
}
console.log(chairs);

if(chairs!=null){
    seats.forEach(seat =>{
        id2++;
        if(chairs[id2]==1){
            seat[id2]=1;
            seat.className='selected';
            seatNum++;
            spans[0].textContent=seatNum;
            spans[1].textContent=seatNum*moviePrice+'$';
        }
    });
}


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

seats.forEach((seat,i) =>{
    if(seat.className=='occupied'){return;}
    seat.addEventListener('click',() =>{
        if(seat.className=='selected'){
            id1++;
            seat.className='empty'
            seatNum--;
            spans[0].textContent=seatNum;
            spans[1].textContent=seatNum*moviePrice;
            chairs[i]=0;
            localStorage.setItem('chairs',JSON.stringify(chairs));
        }
        else{
            id1++;
            seat.className='selected';
            seatNum++;
            spans[0].textContent=seatNum;
            spans[1].textContent=seatNum*moviePrice+'$';
            chairs[i]=1;
            localStorage.setItem('chairs',JSON.stringify(chairs));
        }
    });
})