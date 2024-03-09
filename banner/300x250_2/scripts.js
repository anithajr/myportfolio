// author Piers Rueb

init = function(){
   setTimeout(function(){
	   allAnimations();
   }, 10);
}


function allAnimations() {

    var animCount = 0;
    var animTimer = setInterval(function(){ theTimer() }, 100),
	
		pic1 = document.getElementById('pic1'),
		pic2 = document.getElementById('pic2'),
		pic2a = document.getElementById('pic2a'),
		roomba = document.getElementById('roomba-main'),
		brush = document.getElementById('roomba-brush'),
		logo = document.getElementById('logo'),		
		copy2 = document.getElementById('copy2'),
		copy3 = document.getElementById('copy3'),
		copy4 = document.getElementById('copy4'),
		roomba2 = document.getElementById('roomba2'),
		shine = document.getElementById('shine'),		
		whiteBg = document.getElementById('whiteBg'),
		whiteBlock = document.getElementById('whiteBlock'),        
		greenBg = document.getElementById('greenBg'),
		circleR = document.getElementById('circleR'),
		obot = document.getElementById('obot'),		
		endFrame = document.getElementById('endFrame'),
        cta = document.getElementById('cta');				
		hoverActive = false;

	//  timings

	function theTimer(){
		if(animCount == 0){
			pic1.setAttribute('class', 'fade-in');
			logo.setAttribute('class', 'fade-in');
			copy1a.setAttribute('class', 'fade-in');
			copy1b.setAttribute('class', 'fade-in');						
		} else if(animCount == 20){
            copy1a.setAttribute('class', 'transition-2 fade-in copy1a_move');					
		} else if(animCount == 24){      			
			copy1b.setAttribute('class', 'transition-2 fade-in copy1b_move');
		} else if(animCount == 26){  
			pic2.setAttribute('class', 'transition-2 fade-in');
			pic2a.setAttribute('class', 'transition-2 fade-in');	 	   	
			roomba.setAttribute('class', 'fade-in');
			brush.setAttribute('class', 'fade-in');   							 	   
		} else if(animCount == 32){
			pic2a.setAttribute('class', 'transition-10 pic2a_hide');	 
			roomba.setAttribute('class', 'transition-4 fade-in romba_move');
			brush.setAttribute('class', 'fade-in brush');
		} else if(animCount == 51){												            
			copy1b.setAttribute('class', 'transition-2 fade-out');							            
		} else if(animCount == 81){           
			whiteBg.setAttribute('class', 'transition-1 fade-in');
			copy2.setAttribute('class', 'transition-2 fade-in');
			roomba2.setAttribute('class', 'fade-in romba2_up');
		} else if(animCount == 110){
            copy2.setAttribute('class', 'transition-1 fade-out');
			roomba2.setAttribute('class', 'fade-out romba2_up');	
			copy3.setAttribute('class', 'transition-2 fade-in');		
        } else if(animCount == 131){
			copy3.setAttribute('class', 'transition-2 fade-out');				
        } else if(animCount == 138){  
			roomba2.setAttribute('class', 'transition-2 fade-in romba2_left'); 
			whiteBlock.setAttribute('class', 'transition-3 fade-in');
			endFrame.setAttribute('class', 'transition-2 fade-in');   				
        } else if(animCount == 140){   	
			copy4.setAttribute('class', 'transition-2 fade-in');		
			cta.setAttribute('class', 'transition-2 fade-in');
        } else if(animCount == 143){			
			circleR.setAttribute('class', 'transition-7 fade-in scale-in');	
			hoverStuff();
        } else if(animCount == 148){			
			greenBg.setAttribute('class', 'fade-in transition-8 zoom-in');
            obot.setAttribute('class', 'transition-1 fade-in');
		} else if(animCount == 180){
            clearInterval(animTimer);
		} animCount++;
	}	
	
	function hoverStuff(){
		btn.addEventListener("mouseover", hoverState);
		btn.addEventListener("mouseout", hoverState);
		function hoverState(){
			if(hoverActive == false){				
				shine.setAttribute('class', 'transition-2 move');	
				hoverActive = true;
			} else{
				shine.setAttribute('class', '');								
				hoverActive = false;
			}
		}
	}
}

