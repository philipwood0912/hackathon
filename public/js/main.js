(() => {
    console.log('hello');
    //variables
    var counter = 0;
    var timer = 0;
    var burgerCon = document.querySelector("#burgerCon"),
        menuBut = document.querySelector("#menuCon"),
        back = document.querySelector(".left"),
        next = document.querySelector(".right"),
        image = document.querySelector("#slideImg");
    var cons = document.querySelectorAll('.divCon');

    //interval for review display
    var cntTimer = setInterval(function() {
        timer += 1;
        if(timer == 4){
            timer = 0;
            cons.forEach(con => {
                con.classList.add("hidden");
            })
        }
        if(timer <= 3) {
            cons[timer].classList.remove('hidden');
        }
        if(timer > 0) {
            cons[timer - 1].classList.add('hidden');
        }
        console.log(timer);
    }, 15000);

    //function to control min/max value of counter / update image src
    function counterControl(x){
        counter += x;
        if(counter > 3){
            counter = 0;
        }
        if(counter < 0){
            counter = 3;
        }
        image.src = `images/image${counter}.jpg`;
    }
    //interval var in global scope
    var interval;

    //function to start slide show timer
    function startShow() {
        clearInterval(interval);
        interval = setInterval(function() {
            counterControl(1);
            image.src = `images/image${counter}.jpg`;
        }, 20000);
    }

    //start timer / show img
    startShow();
    image.src = `images/image${counter}.jpg`;

    //hamburger menu function
    function hamburgerMenu(){
        console.log("button clicked");
        burgerCon.classList.toggle("slideToggle");
        menuBut.classList.toggle("expanded");
    }

    //events
    menuBut.addEventListener("click", hamburgerMenu);

    back.addEventListener("click", function(e){
        counterControl(-1);
        startShow();
        console.log(counter);
        debugger;
    });

    next.addEventListener("click", function(e){
        counterControl(1);
        startShow();
        console.log(counter);
    });
    
})();
