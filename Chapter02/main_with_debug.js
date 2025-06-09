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

function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){

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

// Funtions like insertAdjacentHTML need to be in parenthese if not it reads as a string

		row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });

// extra ; not needed

}

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

// you need to call the funtions so that it can work property

addColumns(cityPop);
addEvents();
