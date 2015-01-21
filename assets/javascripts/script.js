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
