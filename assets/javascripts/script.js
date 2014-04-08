var tunisiana = {
    version: '1.1.2',
    date: '2014.jun.06',
    debug: true,
	currentFrame: 1,
	consolelog: {
        css: 'background: #FFF; color: #E3001B'
    },
	log: function(msg,notcustom) {
        if (this.debug && !$.browser.msie){
			if(!notcustom)
	            console.log('%c LOG : ', this.consolelog.css, msg);
			else
				console.log(msg);
		}
    }
};
$( function() { 
	// Display the right thumbnail instead of the slideshow animated gif when the slideshow is running
	$( 'body' ).bind( 'vegaswalk', function( e, bg ) {
	    var src = $( bg ).attr( 'src' ).replace( 'background', 'thumbnail' );
		$( '#thumbnail' ).attr( 'src', src );
		
	});
	
	// Auto Vegaswalk
	$( '#pause' ).trigger( "click" );
	
	
	$('.frame-3 .btn-reset').bind('click', function(){
		$('.frame-3 input').val('');
	});
	
	$('.frame-3 input').bind('focus', function(){
		$(this).initKeyboard();
	});
	
	$('#slickQuiz').slickQuiz(
		{
                checkAnswerText:  'Suivant',
                nextQuestionText: 'Suivant',
                backButtonText: '',
                tryAgainText: '',
                skipStartButton: false,
                numberOfQuestions: 1,
                randomSort: true,
                randomSortQuestions: true,
                randomSortAnswers: true,
                preventUnanswered: false,
                completionResponseMessaging: false,
                disableResponseMessaging: true,
				hideQuizName: true,
				hideQuizHeader: true
            }
	);
	$('#slickQuiz .quizResults').click(function() {
    	      location.reload();
	});
	
	
	$('.next-frame').click(function(){
		nextFrame();
	});
 
 });
 nextFrame = function(){
	 $('.vegas-background').hide();
	 tunisiana.log('----------------------------------------------------',true);
	 tunisiana.log('					NextFrame						',true);
	 tunisiana.log('----------------------------------------------------',true);
	 $('#frame-'+tunisiana.currentFrame).css('z-index','90').fadeOut('slow', function(){
		 $(this).hide();
	 });
	 tunisiana.log('Hide frame'+tunisiana.currentFrame);
	 tunisiana.currentFrame++;
	 $('#frame-'+tunisiana.currentFrame).css('z-index','10').fadeIn('slow', function(){
		 tunisiana.log('Show frame'+tunisiana.currentFrame);
	 });
 };
 
 
 
 