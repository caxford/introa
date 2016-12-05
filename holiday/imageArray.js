var imageArray = [

"http://images.dailyhive.com/20160912140657/Christmas-champagne-Andrzej-SowaShutterstock.jpg",
"http://mccrindle.com.au/blog/2014/11/Christmas.jpg",
"http://cdn.mos.cms.futurecdn.net/b07fe573201528c3cbb1fd4c8e816866.png",
"https://www.souvenirs.nyc/wp/wp-content/uploads/2015/10/christmas.jpg",
];

var currentIndex= 0;

function renderImage() {
	if(currentIndex < 0) {
	currentIndex = imageArray.length -1;
	} else if (currentIndex >= imageArray.length){

	currentIndex = 0;

	}
	
	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

$('#forwardBtn').on('click', function(){
	//this is what happends when it's clicked
			
	currentIndex++;
	renderImage();



});

$('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();

});

var name = prompt ("What's your name?");

var outputString = "Dear " + name +", " +" I hope you have a great holiday season!";

$("h1").html(outputString);
 
 // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Person');
        data.addColumn('number', 'Cheerfulness');
        data.addRows([
          ['Mommo', 30],
          ['Aidan', 1],
          ['Reilly', 1],
          ['Cambell', 1],
          ['Caroline', 2]
        ]);

        var chartWidth = $(window).width()*0.35;


        // Set chart options
        var options = {'title':'Who Has the Most Christmas cheer',
                       'width': chartWidth,
                       'height':300,
                       'backgroundColor': '#1e5627',
                       'colors': ['white']
}
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }


