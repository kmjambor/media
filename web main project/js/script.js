$(document).ready(function() {

	var controller = new ScrollMagic.Controller(); // this is needed for all scrollmagic effects: think of controller as the vehicle that will deliver all scrollmagic effects to the user

	var scene = new ScrollMagic.Scene({ // ditto
					triggerElement: "#trigger", // designates #trigger div as the trigger for our scrollmagic effects
					triggerHook: 0, // setting this to "0" means that the trigger needs to reach the top of the browser window for scrollmagic effects to start
			    	duration: 500 // duration of the scrollmagic effects
				})
			    .setPin("#section") // #section's position is now fixed when scrollmagic starts
			    .setTween("#image", {top: "-500px"}) // #image scrolls up by 500 pixels when scrollmagic starts
			    .addTo(controller); // adds all effects mentioned above to the scrollmagic controller








});