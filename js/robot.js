$(document).ready(function () {
		
		poke = ['Don\'t poke me, bro!',
				'I don\'t really like that.',
				'Knock it off!',
				'Human!',
				'You need some help, human!',
				'Who are you?',
				'You must be evil!',
				'Are you crazy?',
				'Do you know who am I?',
				'You are an idiot!',
				'Keep your hands to yourself, please.',
				'NO!',
				'That is rude.',
				'No touching!',
				'Bad!',
				'Don\'t make me hit you!',
				'Don\'t poke me!',
				'Get out of my personal space!',
				'Do not touch!'];

	$('.text').focus();

	$('.head').on('click', function () {
		$('.head').addClass('bounce');
		$('p').text(poke[randomInt(0,15)]);
		$('.text').focus();
		setTimeout(function () {
			$('.head').removeClass('bounce');
		}, 800);
	});

	

	$('body').disableSelection();
	
});

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};