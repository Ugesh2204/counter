let count = 0;
//use querySeletor all to select all the buttons.
//You select 1 by one to but you need to set 3 different eventlistners
//We are going to use a foreach the the button method as it will retirn a nodelist
//we are going to loop in the btn and check which one is decrease or increase

// currentTarget will spit back which button i have clicked

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
  btn.addEventListener('click',function(e){
      //get me list of classes with target
      const styles= e.currentTarget.classList;

      //if this variable contains specific class that mean tha i am clicking on 
      if(styles.contains('decrease')){
          count--
      }
      else if (styles.contains('increase')){
          count++;
      }

      else {
          count = 0;
      }

      if(count > 0){
          //change span color value
          value.style.color = "green";
      }
      if(count < 0 ){
          value.style.color="red";
      }
      if(count === 0){
          value.style.color="black";
      }
      value.textContent = count;

      
  })
})