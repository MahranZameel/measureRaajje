<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
<!-- START OF HIT COUNTER CODE -->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-26053242-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<!-- END OF HIT COUNTER CODE -->

    	<title>Measure Raajje | Home</title>
        
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="author" content="Ahmed Mahran Zameel" />
        <meta name="description" content="Distance calculator for measuring the distances between islands of the Maldives." />
        <meta name="keywords" content="calculate, calcuator, cost, distance, fuel, maldives, measure, measurement, miles, nautical, raajje" /> 
        
        <link rel="shortcut icon" href="images/logo_measureRaajje_small.jpg" />
        <link href="styleMain.css" rel="stylesheet" type="text/css" />
        <link href="styleProgram.css" rel="stylesheet" type="text/css" />
        
        <script type="text/javascript" src="jsFiles/variables.js"></script>
        <script type="text/javascript" src="jsFiles/functions.js"></script>
    	<script type="text/javascript" src="jsFiles/array_atoll.js"></script> <!-- Atoll names array file -->
		<script type="text/javascript" src="jsFiles/array_island.js"></script> <!-- Island names array file -->
		<script type="text/javascript" src="jsFiles/array_latDeg.js"></script> <!-- Latitude degrees array file -->
		<script type="text/javascript" src="jsFiles/array_latMin.js"></script> <!-- Latitude minutes array file -->
		<script type="text/javascript" src="jsFiles/array_lonDeg.js"></script> <!-- Longitude degrees array file -->
		<script type="text/javascript" src="jsFiles/array_lonMin.js"></script> <!-- Longitude minutes array file -->
		<script type="text/javascript" src="jsFiles/array_lonDir.js"></script> <!-- Longitude directions array file -->
    </head>
    
    <body onload="javascript:populateSelectAtolls()">
		<div id="header">
            <?php include 'includes/header.php'; ?>
		</div>
        
		<div id="container">
        	<div id="bannerTop">
				<img src="images/banner_celaeno_ad.jpg" alt="Celaeno Advertisement" />
            </div>
            
            <div id="contentRight">
            	<div id="donateBox">
		            <?php include 'includes/donate.php'; ?>
    			</div>
                
            	<div id="tutorialBox">
                	<p>Not sure how to use the Measure Raajje Distance Calculator? Visit our tutorial page to learn how.</p>
                    <a href="tutorial.php">Tutorial</a>
                </div>
                
                <div>
					<img src="images/side_banner_trimo_ad.jpg" alt="Trimo Advertisement" />
                </div>
			</div>
            
			<div id="contentLeft">
            	<?php include 'includes/program.php'; ?>
			</div>
		</div>
        
		<div id="footer">
        	<?php include 'includes/footer.php'; ?>
    </body>
</html>