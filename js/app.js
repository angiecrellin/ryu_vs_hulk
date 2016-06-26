$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})


		.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		
	})
			
		.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'right': '1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('right', '520');
			});
	})	

		.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		
	});

		
		$(document).keydown(function(e) {
			if (e.keyCode == 88) {
				$('.ryu-ready').hide();
				$('.ryu-still').hide();
				$('.ryu-cool').show();
			}
	})
		
	
		.keyup(function(e) {
			if(e.keyCode == 88) {
				$('.ryu-cool').hide();
				$('.ryu-still').show();
			}
	});

		
		$('.ryu-hulk').mouseenter(function(){
		$('.ryu-hulk-still').hide();
		$('.ryu-hulk-ready').show();
	})
		.mouseleave(function(){
		$('.ryu-hulk-ready').hide();
		$('.ryu-hulk-still').show();
		
	})
		.mousedown(function() {
		playHadouken();
		$('.ryu-hulk-ready').hide();
		$('.ryu-hulk-throwing').show();
		$('.hadouken-hulk').finish().show().animate(
			{'left': '1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '520');
			});
	})	

		.mouseup(function(){
		$('.ryu-hulk-throwing').hide();
		$('.ryu-hulk-ready').show();
		
	})
	

		$(document).keydown(function(f) {
			if (f.keyCode == 89) {
				$('.ryu-hulk-ready').hide();
				$('.ryu-hulk-still').hide();
				$('ryu-hulk-throwing').hide();
				$('.ryu-hulk-cool').show();
			}
	})

		.keyup(function(f) {
			if(f.keyCode == 89) {
				$('.ryu-hulk-cool').hide();
				$('.ryu-hulk-still').show();

			}
	});

});
	function playHadouken() {
		$('#hadouken-sound') [0].volume = 0.5;
		$('#hadouken-sound') [0].load();
		$('#hadouken-sound') [0].play();
	}

