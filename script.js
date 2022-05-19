function colorgen() {
    var r = Math.floor(Math.random() * 225);
    var g = Math.floor(Math.random() * 225);
    var b = Math.floor(Math.random() * 225);
    
    var ajax = jQuery.ajax({
    	method : 'post',
		url : 'index.php', // Link to this page
		data : { 'increase' : 'true' }
	});
    
    document.body.style.backgroundColor="rgb("+r+", "+g+", "+b+")";
    console.log("rgb("+r+", "+g+", "+b+")");
}

