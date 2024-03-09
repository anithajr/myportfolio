//  Author George Costanza

init = function(){
    allAnimations();
}
var cnt = 0;
function allAnimations() {

    var animCount = 0;
	
        ctaVis = false,
        ctaActive = false;
        bg = document.getElementById('bg'),
        biker = document.getElementById('biker'),
        copy1 = document.getElementById('copy1'),
        copy2 = document.getElementById('copy2'),
        copy3 = document.getElementById('copy3'),
        tablet = document.getElementById('tablet'),
        lockup = document.getElementById('lockup'),
        logo = document.getElementById('logo'),
        cta = document.getElementById('cta'),
        ctaOver = document.getElementById('ctaOver'),
        btn = document.getElementById('btn');

	setInterval(function(){
		if(animCount == 2){
			copy1.setAttribute('class', 'transition-1 fade-in');
		}else if(animCount == 30){
			tablet.setAttribute('class', 'transition-2 move-right');
		}else if(animCount == 40){
			bg.setAttribute('class', 'transition-3 move-bg');
			biker.setAttribute('class', 'transition-3 move-bg');
		}else if(animCount == 45){
			copy1.setAttribute('class', 'transition-1');
		}else if(animCount == 60){
			copy2.setAttribute('class', 'transition-1 fade-in');
		}else if(animCount == 100){
			biker.setAttribute('class', 'transition-1 move-bg fade-out');
			copy2.setAttribute('class', 'transition-1');
			tablet.setAttribute('class', 'transition-1 move-right fade-out');
		}else if(animCount == 105){
			lockup.setAttribute('class', 'transition-1 fade-in');
		}else if(animCount == 125){
			logo.setAttribute('class', 'transition-1 fade-in');
		}else if(animCount == 145){
			copy3.setAttribute('class', 'transition-1 fade-in');
		}else if(animCount == 150){
			cta.setAttribute('class', 'transition-1 fade-in');
           // reset.setAttribute('class', 'transition-1 fade-in');
		    ctaActive = true;
			hoverStuff();            
		}else if(animCount == 180){
			resetStuff();           
		}
		animCount++
	}, 100);

    //  hover stuff

    function hoverStuff(){
        btn.addEventListener('mouseover', ctaHover);
        btn.addEventListener('mouseout', ctaHover);

        function ctaHover(){
            if(ctaActive == true){
                if(ctaVis == false){
                    cta.setAttribute('class', 'fade-in cta-over');
                    ctaVis = true;
                } else{
                    cta.setAttribute('class', 'fade-in');
                    ctaVis = false;
                }
            }
        }
    }

    //  reset stuff

    function resetStuff(){
		cnt++;
		if(cnt < 3){			
			bg.setAttribute('class', 'fade-in');
			copy1.setAttribute('class', 'fade-out');
			copy2.setAttribute('class', 'fade-out');
			copy3.setAttribute('class', 'fade-out');
			tablet.setAttribute('class', 'fade-out');
			biker.setAttribute('class', 'fade-in');
			lockup.setAttribute('class', 'fade-out');
			logo.setAttribute('class', 'fade-out');
			cta.setAttribute('class', 'fade-out');			
			ctaActive = false;			
			allAnimations();						
		}
		else{
			ctaActive = true;
		}
		
        //reset.addEventListener('click', bannerReset);
			
        /*function bannerReset(){
            ctaActive = false;
            logo.setAttribute('class', 'transition-1');
            copy3.setAttribute('class', 'transition-1');
			cta.setAttribute('class', 'transition-1 fade-out');
            biker.setAttribute('class', '');
            reset.setAttribute('class', 'transition-1');
            bg.setAttribute('class', 'transition-1');
            lockup.setAttribute('class', 'transition-1');
            setTimeout(function(){
                allAnimations();
            }, 1000);
        }*/
    }

}
