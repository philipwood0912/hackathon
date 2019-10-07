(() => {
    console.log('hello');

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
    }, 3000);
    
})();
