(() => {
    console.log('hello');

    var burgerCon = document.querySelector("#burgerCon"),
        menuBut = document.querySelector("#menuCon");

    var cons = document.querySelectorAll('.divCon');
    var timer = 0;
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

    function hamburgerMenu(){
        console.log("button clicked");
        burgerCon.classList.toggle("slideToggle");
        menuBut.classList.toggle("expanded");
    }

    menuBut.addEventListener("click", hamburgerMenu);
    
})();
