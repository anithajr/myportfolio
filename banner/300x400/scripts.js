// author Piers Rueb

function startAnim(){
   setTimeout(function(){
	   allAnimations();
	}, 200);
}

var cnt = 0;
function allAnimations() {

	var animCount = 0;
	var animTimer = setInterval(function(){ theTimer() }, 100);

	var b1 = document.getElementById('b1'),
		b2 = document.getElementById('b2'),
		b3 = document.getElementById('b3'),
		b4 = document.getElementById('b4'),
		b5 = document.getElementById('b5'),
		c1 = document.getElementById('c1'),
		c2 = document.getElementById('c2'),
		c3 = document.getElementById('c3'),
		lockup = document.getElementById('lockup'),
		cta = document.getElementById('cta'),
       // reset = document.getElementById('reset'),
		logo = document.getElementById('logo');

    //  banner reset

    //reset.addEventListener('click', resetBanner);

    function resetBanner(){
		cnt++;
		if(cnt < 3){
        lockup.setAttribute('class', '');
        logo.setAttribute('class', 'transition-1');
        c3.setAttribute('class', 'transition-1');
        cta.setAttribute('class', 'transition-1');
        //reset.setAttribute('class', 'transition-1');
        clearInterval(animTimer);
        animCount = 0;
        allAnimations();
		}
    }

	//  timings

	function theTimer(){
		if(animCount == 5){
			b1.setAttribute('class', 'transition-1 fade-in');
		} else if(animCount == 15){
			b3.setAttribute('class', 'transition-1 fade-in');
		} else if(animCount == 25){
			b2.setAttribute('class', 'transition-1 fade-in');
		} else if(animCount == 35){
			b4.setAttribute('class', 'transition-1 fade-in');
		} else if(animCount == 45){
			c1.setAttribute('class', 'transition-1 fade-in');
		} else if(animCount == 65){
			c2.setAttribute('class', 'transition-1 fade-in');
		} else if(animCount == 90){
			b2.setAttribute('class', 'transition-1');
			b4.setAttribute('class', 'transition-1');
			b1.setAttribute('class', 'transition-1');
			b3.setAttribute('class', 'transition-1');
			c1.setAttribute('class', 'transition-1');
			c2.setAttribute('class', 'transition-1');
        } else if(animCount == 95){
            lockup.setAttribute('class', 'transition-1 right');
        } else if(animCount == 115){
            lockup.setAttribute('class', 'transition-1 right fade-out');
		} else if(animCount == 120){
			logo.setAttribute('class', 'transition-1 fade-in');
		} else if(animCount == 135){
			c3.setAttribute('class', 'transition-1 fade-in');
		} else if(animCount == 145){
			cta.setAttribute('class', 'transition-1 fade-in');
        } else if(animCount == 150){
            //reset.setAttribute('class', 'transition-1 fade-in');
		} else if(animCount == 165){
			clearInterval(animTimer);
			resetBanner();
		}
		animCount++
	};

	//  animations end

}
