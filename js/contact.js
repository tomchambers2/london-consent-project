$(document).ready(function() {
	$('.send-message').click(function(e) {
		e.preventDefault()
		$('.error').hide()

		if (!$('.name').val() || !$('.email').val() || !$('.subject').val() || !$('.message').val()) {
			$('.error').removeClass('hidden')
			$('.error').show()
			console.log($('.error'));
			console.error('invalid form')
			return
		}
		$.post('http://send-bot.herokuapp.com/send/london-consent-project', $('.send').serialize())
		.done(function () {
			$('.send').hide()
			$('.sent').removeClass('hidden')
			$('.sent').show()
		})
		.fail(function() {
			$('.error').show()
			console.error('Post request failed when sending message')
		});
	});
});