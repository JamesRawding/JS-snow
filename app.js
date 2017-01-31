$( document ).ready(function(){
	letItSnow();
});

	
function letItSnow(){
	for(var i = 0; i <=10; i++){
		$('body').append('<div class="snowflake"></div>');	
	}

	var callCount = 1;
	var repeater = setInterval(function () {
	  if (callCount < 10) {
	    callCount += 1;
	    snowflakeLoop();
	  } else {
	    clearInterval(repeater);
	  }
	}, 0);

	
	
};



function snowflakeLoop(){
	var height = $(window).height();
	var width = $(window).width();
	var snowflake = $('.snowflake');


	snowflake.each(function (i) {
	    var $el = $(this);

	    var randomLeft = 0;

	    setTimeout(function () {
	    randomLeft = getRandomInt(0, width);

	     $el.css({
			'left': randomLeft	
		}); 

	    $el.animate({
	    	'top': height,	
	    },3500, "linear", function(){
	    	$el.css({
				'left': randomLeft,
				'top': '-50px'	
			}); 

	    });

	 }, 300 * (i + 1));

	});	
}



function getRandomInt(min, max) {
	min = Math.ceil(min);
  	max = Math.floor(max);
		return (Math.floor(Math.random() * (max - min)) + min);
}












