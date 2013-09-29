define( ['jquery'], function ( $ ) {
	$( '[name=original]' ).click( function () {
		$('body').toggleClass( 'hide-original' );
	} );
} );