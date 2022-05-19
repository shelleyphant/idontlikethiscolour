<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="style.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
		<script src="script.js" charset="utf-8"></script>
		<title>I Don't Like This Colour</title>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'UA-58048087-1');
		</script>
	</head>
	
	<body>
		<div class="container">
				<a href="#" class="button" onclick="colorgen()">
					<h1>I Don't Like This Colour</h1>
				</a>
		</div>
	</body>
  </html>  



<?php  
$fp = fopen("counter.txt", "r"); 
$count = fread($fp, 1024); 
fclose($fp); 

// Add 1 to the existing count 
$count = $count + 1; 

// Display the number of hits 
// If you don't want to display it, comment out this line 
//echo "<p>Page views:" . $count . "</p>"; 

// Reopen the file and erase the contents 
$fp = fopen("counter.txt", "w"); 
// Write the new count to the file 
fwrite($fp, $count); 
// Close the file 
fclose($fp); 

?> 