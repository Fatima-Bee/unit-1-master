// create the city table

var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

// define the city size based on the pop

function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){

//this adds a header
// typo in insertAdjacentHTML, 'e' was missing

    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

// variables are case sensitive, the 'S' in size is not uppercase.

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

// this adds the cell with the size
// Funtions like insertAdjacentHTML need to be in parenthese if not it reads as a string

		row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });

// extra ; not needed

}

// this allows the click pop up message and the hover changing colors to work

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

//added spaces

		for (var i = 0; i < 3; i++){

			var random = Math.round(Math.random() * 255);

// Double quotation marks do not allow the script to generate a random color but rather make it a  
// string

			color += random;

//added space

			if (i < 2){
				color += ",";
			
			} else {
				color += ")";

//added bracket and removed ;

		}
		}

// To change the background color style.backgroundColor needs to be used

		document.querySelector("table").style.backgroundColor = color;
	});

	function clickme(){

		alert('Hey, you clicked me!');
	}
// incorrect placements of ;

	document.querySelector("table").addEventListener("click", clickme);
}

// you need to call the functions so that it can work property

addColumns(cityPop);
addEvents();




// Debug_ajax.js
// We want the raw JSON data to display
// To do that we need to turn the JSON data into a string 


function debugCallback(response) {

//changed myData to response to see if that works added ; after )) and removed ; from }
// added <br> to 'GeoJSON data'

	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br> GeoJSON data: <br>' + JSON.stringify(response));

}

// This is what brings in the data

function debugAjax() {
	
	var myData;

// We need to analyze the JSON data by added the return respose.json(); line
	
	fetch("data/MegaCities.geojson")
	    .then(function(response){
		 return response.json();
	    })

// We add this so we are able to bring in the actual JSON data as a string

	    .then(function(data){
		myData = data;
		debugCallback(myData);

// Missing comma after 'beforeend' and missing ; after )) and missind ) after }
//we also move this line into the .then funtion so it knows what data to use

		document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br> GeoJSON data: <br>' + JSON.stringify(myData));
            });
}

// Make sure to call the funtion so it can work

debugAjax();


