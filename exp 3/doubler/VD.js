

var tabrowindex = 0;
var arr = [];
var table;

var chart;
var dataPoints = [];
// var showAlert;
//------------------------------------------------- Table Creation -----------------------------------------------//
function tabled() {

document.getElementById('tr1').style.display="block";
    arr[0] = tabrowindex + 1;
    arr[1] = document.getElementById("txt1").value;
    arr[2] = document.getElementById("txt2").value;
    arr[3] = document.getElementById("txt3").value;
	arr[4] = document.getElementById("txt4").value;
	arr[5]= document.getElementById("txt5").value;
table = document.getElementById("myTable");
        
        var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 15) {
        
         // Row increment
        for (var q = 0; q < 6; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}

//Slider changing txt boox value//

function CLCURR(){
document.getElementById('txt1').value = document.getElementById('range1').value;
}    
function CFREQ(){
document.getElementById('txt2').value = document.getElementById('range2').value;
} 

function CC1(){
document.getElementById('txt3').value = document.getElementById('range3').value;
} 

function CC2(){
document.getElementById('txt4').value = document.getElementById('range4').value;
} 


//slider display function//

function displayrange(select){
	if(select.value==1){
	document.getElementById('range1').style.display="block";
	}
else{
	document.getElementById('range1').style.display="none";
}

	if(select.value==2){
	document.getElementById('range2').style.display="block";
}
else{
	document.getElementById('range2').style.display="none";
}


	if(select.value==3){
	document.getElementById('range3').style.display="block";
	document.getElementById('range4').style.display="block";
}

else{
	document.getElementById('range3').style.display="none";
	document.getElementById('range4').style.display="none";
}

}

function showspan1(){
	document.getElementById('span1').style.display="block";
}
function hidespan1(){
	document.getElementById('span1').style.display="none";
}

function showspan2(){
	document.getElementById('span2').style.display="block";
}
function hidespan2(){
	document.getElementById('span2').style.display="none";
}

function plot() {
document.getElementById('chartContainer').style.display ="block";
table= document.getElementById('myTable');
    for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
        var rwe1 = table.rows[tabrowindex].cells;

        dataPoints.push({x: parseFloat(rwe1[1].innerHTML), y: parseFloat(rwe1[5].innerHTML)});
    }

    chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme1", 
        title: {
            text: "Load Current Vs. Ripple Plot",
			fontColor:"#086176",
		    fontSize: 15,
        },
        
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            //logarithmic: false, 
		title: "Load Current(uA)",
		titleFontColor: "black",		
		gridColor:"black",
		gridThickness: 2,
		lineThickness: 1,
		//maximum:200,
        },
        axisY: {
            title: "Riipple(mV)",
        },
        data: [
            {
                type: "line",
                dataPoints: dataPoints
            }
        ]
		
    });

    chart.render();
	

    

}

function plot2() {
document.getElementById('chartContainer2').style.display ="block";
table= document.getElementById('myTable');
    for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
        var rwe1 = table.rows[tabrowindex].cells;

        dataPoints.push({x: parseFloat(rwe1[2].innerHTML), y: parseFloat(rwe1[5].innerHTML)});
    }

    chart = new CanvasJS.Chart("chartContainer2", {
        theme: "theme1", 
        title: {
            text: "Frequency Vs. Ripple Plot",
			fontColor:"#086176",
		    fontSize: 15,
        },
        
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            //logarithmic: false, 
		title: "Frequency(Hz)",
		titleFontColor: "black",		
		gridColor:"black",
		gridThickness: 2,
		lineThickness: 1,
		//maximum:200,
        },
        axisY: {
            title: "Riipple(mV)",
        },
        data: [
            {
                type: "line",
                dataPoints: dataPoints
            }
        ]
		
    });

    chart.render();
	

    

}

function plot3() {
document.getElementById('chartContainer3').style.display ="block";
table= document.getElementById('myTable');
    for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
        var rwe1 = table.rows[tabrowindex].cells;

        dataPoints.push({x: parseFloat(rwe1[3].innerHTML), y: parseFloat(rwe1[5].innerHTML)});
    }

    chart = new CanvasJS.Chart("chartContainer3", {
        theme: "theme1", 
        title: {
            text: "Capacitance Vs. Ripple Plot",
			fontColor:"#086176",
		    fontSize: 15,
        },
        
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            //logarithmic: false, 
		title: "Capacitance(uF)",
		titleFontColor: "black",		
		gridColor:"black",
		gridThickness: 2,
		lineThickness: 1,
		//maximum:200,
        },
        axisY: {
            title: "Riipple(mV)",
        },
        data: [
            {
                type: "line",
                dataPoints: dataPoints
            }
        ]
		
    });

    chart.render();
	

    

}

function displayplot(select){
	
	if(select.value==1){
	plot();
	}
	else {
	document.getElementById('chartContainer').style.display ="none";	
	}
	if(select.value==2){
	plot2();
	}
	else {
	document.getElementById('chartContainer2').style.display ="none";	
	}
	
	if(select.value==3){
	plot3();
	}
	else {
	document.getElementById('chartContainer3').style.display ="none";	
	}
	
}

