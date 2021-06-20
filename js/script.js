setInterval(setClock, 100); 

const hourHand = document.getElementsByClassName('hour')[0],
      minuteHand = document.getElementsByClassName('minute')[0],
      secondHand = document.getElementsByClassName('second')[0];

function setClock(){
    
    const date = new Date(),
          hour = date.getHours() / 12,
          minute = date.getMinutes() / 60,
          second = date.getSeconds() / 60;

          
    setRotation( secondHand, second );
    setRotation( minuteHand, minute );
    setRotation( hourHand, hour );

    function setRotation( element, rotationRatio ){
              
        element.style.transform = "rotate("+ rotationRatio * 360 + "deg)";
    }

            
}

setClock()

const getCircles = document.getElementsByClassName('cc'),
      circles = [].slice.call( getCircles );

    circles.forEach( element => {
     
        element.addEventListener('click', function(){

            const backgroundColor = getComputedStyle(this).backgroundColor,
                  body = document.getElementsByTagName('body')[0];

            body.style.background = backgroundColor;



        });
 });
