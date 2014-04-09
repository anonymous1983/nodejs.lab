$( function() {
	// Display the right thumbnail instead of the slideshow animated gif when the slideshow is running
	$( 'body' ).bind( 'vegaswalk', function( e, bg ) {
	    var src = $( bg ).attr( 'src' ).replace( 'background', 'thumbnail' );
		$( '#thumbnail' ).attr( 'src', src );

	});
	// Auto Vegaswalk
	$( '#pause' ).trigger( "click" );
 });

