$(document).ready(function() {
	$('.send-message').click(function(e) {
		if (!$('.name').val() || !$('.email').val() || !$('.subject').val() || !$('.message').val()) {
			$
		}
		$.post('http://send-bot.herokuapp.com/send/london-consent-project', {
			name: $('.name').val(),
			email: $('.email').val(),
			subject: $('.subject').val(),
			message: $('.message').val()

		})
	})
})