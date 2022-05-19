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
    document.getElementById("colour").innerHTML = "This colour is: rgb("+r+", "+g+", "+b+")";
    // console.log("rgb("+r+", "+g+", "+b+")");

    checkContrast(r, g, b);
}

function checkContrast(r, g, b) {
    if (( (r*0.299) + (g*0.587) + (b*0.114) ) > 150) {
        document.body.style.color="black";
        Array.prototype.forEach.call(document.getElementsByTagName("a"), function(e) {
            e.style.color="black";
            e.style.borderColor="black";
        });

    }
    else {
        document.body.style.color="white";
        Array.prototype.forEach.call(document.getElementsByTagName("a"), function(e) {
            e.style.color="white";
            e.style.borderColor="white";
        });
    }
}

