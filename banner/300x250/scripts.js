init = function(){
   setTimeout(function(){ 
	   allAnimations();
	}, 10);
}

function allAnimations() { 

	var animCount = 0;
	var animTimer = setInterval(function(){ theTimer() }, 100);	
	
	var bg = document.getElementById('bg');		
	var logo = document.getElementById('logo');										
	
	var line1 = document.getElementById('line1');	
	var line2 = document.getElementById('line2');	
	var line3 = document.getElementById('line3');	
	var fullstop = document.getElementById('fullstop');

	var cta = document.getElementById('cta');

	hoverActive = false;
	
//	hoverActive = false;
	
	//  timings

	function theTimer(){

		if(animCount == 0){
			bg.setAttribute('class', 'transition-5 up');		
		}else if(animCount == 3){
			line1.setAttribute('class', 'transition-4 animLine1');
		}else if(animCount == 25){	
			line2.setAttribute('class', 'transition-4 animLine2');	
		}else if(animCount == 35){	
			line3.setAttribute('class', 'transition-4 animLine3');	
		}else if(animCount == 45){	
			fullstop.setAttribute('class', 'fade-in');	
		}else if(animCount == 50){
			hoverStuff();
			cta.setAttribute('class', 'transition-1 fade-in');
		}  else if(animCount == 175){
			clearInterval(animTimer);
		} animCount++
	}

function hoverStuff(){
		btn.addEventListener("mouseover", hoverState);
		btn.addEventListener("mouseout", hoverState);

		function hoverState(){
			if(hoverActive == false){
				console.log('yes')
				cta.setAttribute('class', 'transition-1 fade-out');	
				black.setAttribute('class', 'transition-1 fade-in');	
				// cta.setAttribute('class', 'fade-in show-black');			
				hoverActive = true;
			} else{
				cta.setAttribute('class', 'transition-1 fade-in');
				black.setAttribute('class', 'transition-1 fade-out');	
				// cta.setAttribute('class', 'fade-in');				
				hoverActive = false;
			}
		}
	}

}






