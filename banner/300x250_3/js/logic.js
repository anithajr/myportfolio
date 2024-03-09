
(function () {


	// State object - you can call this whatever you like
	var state = {};

	// Create timeline
	var tl = new TimelineMax();

	// DYNAMIC DATA
	var w = window.innerWidth;
	var h = window.innerHeight;
	
	
	// Provide timeline to Hoxton
	hoxton.timeline = tl;

	// Define the function that should fire when the Ad Server is ready and assets are preloaded
	hoxton.isInitialized = init;

	function init() {
		// Add shorthand references to state object
		state = hoxton.getState();
		
		addListeners();
		mainAnimation.init();
	}
	
	
	// START ANIMATION, MAIN TIMELINE

	var mainAnimation = {
		init: function () {
			
			tl
			.add( "start" )
			.to( "#mainContainer", { duration: 0.5, opacity: 1 }, "start");
			
			// frame 1
				tl
				.to(["#image"], { duration:5, scale:1.07, ease: Power1.easeInOut, rotation:0.01, force3D:false }, "start")
				.to(["#frame1headline1"], { duration:0.1, textShadow:"0 0 0 #d40511", ease: Power1.easeOut, rotation:0.01, force3D:false }, "start+=0.3")
				.to(["#frame1headline1"], { duration:0.2, x:0, textShadow:"0 0 0 #d40511", ease: Power1.easeOut, rotation:0.01, force3D:false }, "start+=0.3")
				.to(["#frame1headline2"], { duration:0.1, textShadow:"0 0 0 #d40511", ease: Power1.easeOut, rotation:0.01, force3D:false }, "start+=1")
				.to(["#frame1headline2"], { duration:0.2, x:0, textShadow:"0 0 0 #d40511", ease: Power1.easeOut, rotation:0.01, force3D:false }, "start+=1")
				
				.to(["#bg3, #cta, #logo"], { duration:0.2, autoAlpha:1, ease: Power1.easeInOut, rotation:0.01, force3D:false }, "start+=4")
				.to(["#frame2copy1, #frame2copy2"], {duration:0.2, textShadow:"0 0 0 #d40511", ease: Power1.easeInOut, rotation:0.01, force3D:false }, "start+=4")
				.to(["#frame2copy1, #frame2copy2"], { duration:0.3, x:0, ease: Power1.easeInOut, rotation:0.01, force3D:false }, "start+=4")
				.to(["#cta"], { duration:0.3, scale:1.15, yoyo:true, repeat:1, ease: Power1.easeInOut, rotation:0.01, force3D:false }, "start+=4.5")

			console.log(tl.duration());

			//Hoxton Backup
			if (hoxton.backup) {
				tl
					.add("endFrame", "+=1")
					.pause("endFrame");
			}
		},
		reset: function () {
			//tl.set( shadow, { x:-100 });	
		},
		hover: function () {
			if (mainAnimation.reached) {
				//mainAnimation.reset();
				//tl.to(shadow, 1.5, { opacity: 1, x:200, onComplete: mainAnimation.reset });
			}
		}
	}
	
	// SPLIT THE COPY BY <br> AND RETURN OBJECT
	function createObject(copy) {
		var array = state[copy].split('<br>');
		var obj = {};
		for(var i = 0; i < array.length; i++){
			obj[copy+alphabet[i]] = array[i];
		}
		return obj;
	}
	
	// CREATE TEXT FILEDS BASED ON THE LINE BREAK IN EACH COPY
	function updateTextFields(txt, count, copy){
		id(copy).innerHTML = "";
		for(var i = 0; i < count; i++){
			var str = Object.keys(txt)[i];
			if(copy === "copy5"){
				id(copy).innerHTML += `<div id=${str}Holder class=mask> <div class=${copy}>${txt[str]}</div></div>`;
			} else {
				id(copy).innerHTML +=`<div id=${str} class=${copy}> ${txt[str]}</div></div>`;
			}
		}
	}
	
	// BACKGROUND EXIT
	function addListeners() {
		id('banner-exit').addEventListener('click', function () {
			hoxton.exit('exit', hoxton.exit,false)
		}, false);
	}

	// UTILS

	function id(input) {
		return document.getElementById(input);
	}

})()