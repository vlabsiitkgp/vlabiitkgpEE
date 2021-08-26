// JavaScript Document
window.onload = visible;
var f,I,n,I1,f1,C,calcripple,calcdrop,divterm1,divterm2,divterm3,divterm4,multerm1,addterm1,multerm2,divterm5;var nsqr,ncube,nplus1;
var riple1cnt=0,riple2cnt=0,riple3cnt=0,riple4cnt=0,freqcnt=0,currcnt=0,cap1cnt=0,cap2cnt=0,lboxcnt=0;
var msg="Enter some value for ";
var msg1 = "Please Enter current value between the range 0.1&micro;Amp - 100&micro;Amp";
var msg2 = "Please Enter Frequency value between the range 50Hz - 5000Hz";
var msg3 = "Please Enter Capacitance1 value between the range 0.1&micro;F - 2&micro;F";
var msg4 = "Please Enter Capacitance2 value between the range 0.1&micro;F - 2&micro;F";
var msg5 = 'Please Choose a value from dropdown';

function visible()
{
document.getElementById('divbtndisplayflsh').innerHTML="<input type= 'button' onclick = 'RunAnim()' value= 'click to display the functioning of voltage Multiplier'></input>";
	

	}

function currentrippledrop()
{
document.getElementById('txtfreq').value = "";document.getElementById('txtfreq').readOnly=false;
document.getElementById('txtcap').value = "";document.getElementById('txtcap').readOnly=false;
document.getElementById('txtlodcrnt').value = "";document.getElementById('txtlodcrnt').readOnly=false;
document.getElementById('txtriple').value='';
document.getElementById('txtdrop').value='';
document.getElementById('td5').style.visibility='hidden';
document.getElementById('td6').style.visibility='hidden';
document.getElementById('td4').style.visibility="visible";
document.getElementById('divtxtrange').style.visibility="visible";
document.getElementById('divtxtmsg').innerHTML="<div align='center' class='style6'>"+"Enter appropriate values in the textboxes to calculate the drop and ripple"+"</div>";
document.getElementById('divtxtmsg').style.visibility="visible";
document.getElementById('divbtncalc').innerHTML = ""; lboxcnt=lboxcnt+1;
document.getElementById('divbtncalc').innerHTML="<input type ='button' id='calculatebtn' value='calculate drop and ripple' onclick='calcripledropcurr()' />";
}

function calcripledropcurr()
{
	if(validatetextboxes())
	{		
		if(currcnt!=6)
		{
			document.getElementById('txtfreq').disabled=true;document.getElementById('txtcap').disabled=true;
document.getElementById('td5').style.visibility="visible";
document.getElementById('td6').style.visibility="visible";
			n= parseInt(document.getElementById('txtnmbrofstgs').value); 
			ncube= n*n*n; nsqr=n*n;nplus1= n+1;
			multerm1= f*C;
			divterm1= I/multerm1;
			divterm2=((2*ncube)/3); divterm3= nsqr/2; divterm4=n/6;
			divterm5=nplus1/2;multerm2=n*divterm5;
			addterm1= divterm2+divterm3-divterm4; 
			calcripple = divterm1*multerm2; /*calcripple=calcripple*1000; */
			calcripple=calcripple.toFixed(4);
			calcdrop=(divterm1*addterm1);
			/*calcdrop=calcdrop*1000;*/ calcdrop=calcdrop.toFixed(4);
			document.getElementById('txtriple').value = calcripple;
			document.getElementById('txtriple').readOnly = true;
			document.getElementById('txtdrop').value = calcdrop;
			document.getElementById('txtdrop').readOnly = true;
			
document.getElementById('txtdiv').innerHTML="<div align='justify'>Ripple and Drop Calculations are over with the entered current value!Enter a different value for current within the input range to continue the experiment</div>";
			document.getElementById('calculatebtn').disabled = true;
			document.getElementById('txtlodcrnt').onchange = cleardivscurr;
			document.getElementById('currentsel').options[0].text='0';
			document.getElementById('ripplesel1').options[0].text='0';
			document.getElementById('dropsel1').options[0].text='0';
			currcnt= currcnt+1; //alert('currcntafterincr:'+currcnt);
			var currtxtval= document.getElementById('txtlodcrnt').value;
			var riple1txtval= document.getElementById('txtriple').value;
			var drop1txtval = document.getElementById('txtdrop').value;
			var currselvar = document.getElementById('currentsel');
			var riplesel1var = document.getElementById('ripplesel1');
			var dropsel1var = document.getElementById('dropsel1');
			currselvar.options[currselvar.options.length] = new Option(currtxtval,currtxtval);
			riplesel1var.options[riplesel1var.options.length] = new Option(riple1txtval,riple1txtval);
			dropsel1var.options[dropsel1var.options.length] = new Option(drop1txtval,drop1txtval);
		}
		else
		{	alert('Entered values are sufficient to plot the graph! Click on the button show graph to display graph');
			document.getElementById('graphdiv').innerHTML ="<input class ='hide' type ='button' id='graphbtn' value='click to show graph' onclick='displaygraphcurr()' />";
			document.getElementById('graphbtn').style.visibility = 'visible';
			document.getElementById('txtlodcrnt').disabled = 'disabled';
			document.getElementById('calculatebtn').disabled = true;
		}
	}	
}

function cleardivscurr()
{
	document.getElementById('txtdiv').innerHTML = "";
	document.getElementById('calculatebtn').disabled = false;
}

function displaygraphcurr()
{
	var k;
	var currsellen = document.getElementById('currentsel').options.length; //alert(currsellen);
	var riplesel1len = document.getElementById('ripplesel1').options.length;
	var dropsel1len = document.getElementById('dropsel1').options.length;
	var currarr = new Array(currsellen); 
	var riple1arr= new Array(riplesel1len); var drop1arr = new Array(dropsel1len);
	
	for(k=0;k<currsellen;++k)
	{
		currarr[k]=parseFloat(document.getElementById('currentsel').options[k].text);
	}
	
	for(k=0;k<riplesel1len;++k)
	{
		riple1arr[k]=parseFloat(document.getElementById('ripplesel1').options[k].text);
	}
	
	for(k=0;k<dropsel1len;++k)
	{
		drop1arr[k]=parseFloat(document.getElementById('dropsel1').options[k].text);
	}
	var myDatariple = new Array();
	for(var j=0;j<currsellen-1;j++){myDatariple[j]= [currarr[j+1],riple1arr[j+1]];}
	
	myDatariple.sort(sort1); 
	function sort1(a,b)
	{
       return ((a[0] < b[0]) ? -1 : ((a[0] > b[0]) ? 1 : 0));
	}
	
	var myDatadrop = new Array();
	for(var j=0;j<currsellen-1;j++){myDatadrop[j]= [currarr[j+1],drop1arr[j+1]];}
	
	myDatadrop.sort(sort1); 
	function sort1(a,b)
	{
       return ((a[0] < b[0]) ? -1 : ((a[0] > b[0]) ? 1 : 0));
	}
	
	var myChart = new JSChart('canvas', 'line');
	//myChart.setDataArray(myData);
	
	myChart.setDataArray(myDatariple,'firstline');
	myChart.setDataArray(myDatadrop,'secondline');
	myChart.setLineColor('#454545');
	myChart.setLineColor('#A4D314','secondline');
	myChart.setTitle(' Current Vs. Ripple & Current Vs. Drop');
	myChart.setTitleFontSize(22);
	myChart.setFlagShape('square');
	myChart.setAxisNameX('current(in Micro Amp)', true);
	myChart.setAxisNameY('Ripple/Drop(in V)', true);
	
	myChart.setAxisNameFontSizeX(15);
	myChart.setAxisNameFontSizeY(15);
	myChart.setAxisNameFontFamilyX('BookmanOldStyle');
	myChart.setAxisNameFontFamilyY('BookmanOldStyle');
	myChart.setAxisPaddingLeft(50);
	myChart.setAxisPaddingTop(70);
	myChart.setAxisPaddingBottom(40);
	myChart.setAxisValuesNumberX(0);
	myChart.setAxisValuesNumberY(0);
	myChart.setLineWidth(4);
	
//for(var j=0;j<currsellen;j++){ myChart.setTooltip([currarr[j],riple1arr[j]]);}
//for(var i=0;i<currsellen;i++){ myChart.setTooltip([currarr[i],drop1arr[i]]);}
	myChart.setLegendShow(true);
	myChart.setLegendPosition(650,8);
	myChart.setLegendForLine('firstline', 'Ripple');
	myChart.setLegendForLine('secondline', 'Drop');
	//myChart.setLegendForLine('gray', 'Click me');

	
	myChart.setTitleColor('#7D7D7D');
	myChart.setAxisColor('#9F0505');
	myChart.setGridColor('#a4a4a4');
	myChart.setAxisValuesColor('#333639');
	myChart.setAxisNameColor('#333639');
	myChart.setTextPaddingLeft(0);
	myChart.setSize(700,420);
	myChart.setBackgroundImage('chart_bg.jpg');	myChart.draw();
	document.getElementById('varyparamsel').disabled = false;	document.getElementById('varyparambtn').disabled = false;
	document.getElementById('varyparamsel').options[1].disabled = true;	document.getElementById('graphbtn').disabled =true;
	document.getElementById('txtlodcrnt').disabled = true;
	document.getElementById('txtfreq').disabled = true;
	document.getElementById('txtcap').disabled = true;
	//document.getElementById('txt4').disabled = true;
		document.getElementById('txtdiv').innerHTML = "<div align= 'justify' class ='style4'>Experiment is completed with the parameter chosen! Perform Experiment with another parameter</div>";
		if(lboxcnt==3)
		{
			document.getElementById('txtlodcrnt').disabled = true;document.getElementById('txtfreq').disabled = true;
			document.getElementById('txtcap').disabled = true;document.getElementById('txtdrop').disabled = true;
			document.getElementById('txtriple').disabled = true;document.getElementById('varyparambtn').disabled = true;
			document.getElementById('varyparamsel').disabled = true;document.getElementById('graphbtn').disabled = true;
			document.getElementById('calculatebtn').disabled = true;
		}
}

function freqrippledrop()
{	
	
document.getElementById('txtfreq').value = "";document.getElementById('txtfreq').readOnly=false;
document.getElementById('txtcap').value = "";document.getElementById('txtcap').readOnly=false;
document.getElementById('txtlodcrnt').value = "";document.getElementById('txtlodcrnt').readOnly=false;
document.getElementById('txtriple').value='';
document.getElementById('txtdrop').value='';
document.getElementById('td5').style.visibility='hidden';
document.getElementById('td6').style.visibility='hidden';
document.getElementById('td4').style.visibility="visible";
document.getElementById('divtxtrange').style.visibility="visible";
document.getElementById('divtxtmsg').innerHTML="<div align='center' class='style6'>"+"Enter appropriate values in the textboxes to calculate drop and ripple"+"</div>";
document.getElementById('divtxtmsg').style.visibility="visible";
document.getElementById('divbtncalc').innerHTML = "";lboxcnt=lboxcnt+1;
document.getElementById('divbtncalc').innerHTML="<input type ='button' id='calculatebtn' value='calculate drop and ripple' onclick='calcripledropfreq()' />";
		
}

function calcripledropfreq()
{
	if(validatetextboxes())
	{		
		if(freqcnt!=6)
		{
			
			document.getElementById('txtlodcrnt').disabled=true;
			document.getElementById('txtcap').disabled=true;
			document.getElementById('td5').style.visibility="visible";
			document.getElementById('td6').style.visibility="visible";
			n= parseInt(document.getElementById('txtnmbrofstgs').value); 
			ncube= n*n*n; nsqr=n*n;nplus1= n+1;
			multerm1= f*C;
			divterm1= I/multerm1;
			divterm2=((2*ncube)/3); divterm3= nsqr/2; divterm4=n/6;
			divterm5=nplus1/2;multerm2=n*divterm5;
			addterm1= divterm2+divterm3-divterm4; 
			calcripple = divterm1*multerm2; /*calcripple=calcripple*1000; */
			calcripple=calcripple.toFixed(4);
			calcdrop=(divterm1*addterm1);
			/*calcdrop=calcdrop*1000;*/ calcdrop=calcdrop.toFixed(4);
			document.getElementById('txtriple').value = calcripple;
			document.getElementById('txtriple').readOnly = true;
			document.getElementById('txtdrop').value = calcdrop;
			document.getElementById('txtdrop').readOnly = true;
			
document.getElementById('txtdiv').innerHTML="<div align='justify'>Ripple and Drop Calculations are over with the entered Frequency value!Enter a different value for frequency within the input range to continue the experiment</div>";
			document.getElementById('calculatebtn').disabled = true;
			document.getElementById('txtfreq').onchange = cleardivsfreq;
			document.getElementById('freqsel').options[0].text='0';
			document.getElementById('ripplesel2').options[0].text='0';
			document.getElementById('dropsel2').options[0].text='0';
			freqcnt= freqcnt+1; //alert('freqcntafterincr:'+freqcnt);
			var freqtxtval= document.getElementById('txtfreq').value;
			var riple2txtval= document.getElementById('txtriple').value;
			var drop2txtval = document.getElementById('txtdrop').value;
			var freqselvar = document.getElementById('freqsel');
			var riplesel2var = document.getElementById('ripplesel2');
			var dropsel2var = document.getElementById('dropsel2');
freqselvar.options[freqselvar.options.length] = new Option(freqtxtval,freqtxtval);
riplesel2var.options[riplesel2var.options.length] = new Option(riple2txtval,riple2txtval);
dropsel2var.options[dropsel2var.options.length] = new Option(drop2txtval,drop2txtval);			
			
  
		}
		else
		{	alert('Entered values are sufficient to plot the graph! Click on the button show graph to display graph');			
			document.getElementById('graphdiv').innerHTML ="<input class ='hide' type ='button' id='graphbtn' value='click to show graph' onclick='displaygraphfreq()' />";
			document.getElementById('graphbtn').style.visibility = 'visible';
			document.getElementById('txtfreq').disabled = 'disabled';
			document.getElementById('calculatebtn').disabled = true;
		}
	}	
}

function cleardivsfreq()
{
	document.getElementById('txtdiv').innerHTML = "";
	document.getElementById('calculatebtn').disabled = false;
}

function displaygraphfreq()
{
<!---------------------------------------------------------------------------->
	var k;
	var freqsellen = document.getElementById('freqsel').options.length; //alert(currsellen);
	var riplesel2len = document.getElementById('ripplesel2').options.length;
	var dropsel2len = document.getElementById('dropsel2').options.length;
	var freqarr = new Array(freqsellen); 
	var riple2arr= new Array(riplesel2len); var drop2arr = new Array(dropsel2len);
	
	for(k=0;k<freqsellen;++k)
	{
		freqarr[k]=parseFloat(document.getElementById('freqsel').options[k].text);
	}
	
	for(k=0;k<riplesel2len;++k)
	{
riple2arr[k]=parseFloat(document.getElementById('ripplesel2').options[k].text);
	}
	
	for(k=0;k<dropsel2len;++k)
	{
	drop2arr[k]=parseFloat(document.getElementById('dropsel2').options[k].text);
	}
	var myDatariple = new Array();
for(var j=0;j<freqsellen-1;j++){myDatariple[j]= [freqarr[j+1],riple2arr[j+1]];}
	
	myDatariple.sort(sort1); 
	function sort1(a,b)
	{
       return ((a[0] < b[0]) ? -1 : ((a[0] > b[0]) ? 1 : 0));
	}
	
	var myDatadrop = new Array();
	for(var j=0;j<freqsellen-1;j++){myDatadrop[j]= [freqarr[j+1],drop2arr[j+1]];}
	
	myDatadrop.sort(sort1); 
	function sort1(a,b)
	{
       return ((a[0] < b[0]) ? -1 : ((a[0] > b[0]) ? 1 : 0));
	}
	
	var myChart = new JSChart('canvas', 'line');
	//myChart.setDataArray(myData);
	
	myChart.setDataArray(myDatariple,'firstline');
	myChart.setDataArray(myDatadrop,'secondline');
	myChart.setLineColor('#454545');
	myChart.setLineColor('#A4D314','secondline');
	myChart.setTitle(' Frequency Vs. Ripple & Frequency Vs. Drop');
	myChart.setTitleFontSize(22);
	myChart.setFlagShape('square');
	myChart.setAxisNameX('Frequency(in Hz)',true);
	myChart.setAxisNameY('Ripple & Drop(in V)',true);
	
	myChart.setAxisNameFontSizeX(15);
	myChart.setAxisNameFontSizeY(15);
	myChart.setAxisNameFontFamilyX('BookmanOldStyle');
	myChart.setAxisNameFontFamilyY('BookmanOldStyle');
	myChart.setAxisPaddingLeft(50);
	myChart.setAxisPaddingTop(70);
	myChart.setAxisPaddingBottom(40);
	myChart.setAxisValuesNumberX(0);
	myChart.setAxisValuesNumberY(0);
	myChart.setLineWidth(4);
	
//for(var j=0;j<currsellen;j++){ myChart.setTooltip([currarr[j],riple1arr[j]]);}
//for(var i=0;i<currsellen;i++){ myChart.setTooltip([currarr[i],drop1arr[i]]);}
	myChart.setLegendShow(true);
	myChart.setLegendPosition(613,12);
	myChart.setLegendForLine('firstline', 'Freq Vs. Ripple');
	myChart.setLegendForLine('secondline', 'Freq Vs.Drop');
	//myChart.setLegendForLine('gray', 'Click me');

	
	myChart.setTitleColor('#7D7D7D');
	myChart.setAxisColor('#9F0505');
	myChart.setGridColor('#a4a4a4');
	myChart.setAxisValuesColor('#333639');
	myChart.setAxisNameColor('#333639');
	myChart.setTextPaddingLeft(0);
	myChart.setSize(700,420);
	myChart.setBackgroundImage('chart_bg.jpg');	myChart.draw();
	document.getElementById('varyparamsel').disabled = false;	document.getElementById('varyparambtn').disabled = false;
	document.getElementById('varyparamsel').options[2].disabled = true;	document.getElementById('graphbtn').disabled =true;
	document.getElementById('txtlodcrnt').disabled = true;
	document.getElementById('txtfreq').disabled = true;
	document.getElementById('txtcap').disabled = true;
	//document.getElementById('txt4').disabled = true;
		document.getElementById('txtdiv').innerHTML = "<div align= 'justify' class ='style4'>Experiment is completed with the parameter chosen! Perform Experiment with another parameter</div>";
		if(lboxcnt==3)
		{
			document.getElementById('txtlodcrnt').disabled = true;document.getElementById('txtfreq').disabled = true;
			document.getElementById('txtcap').disabled = true;document.getElementById('txtdrop').disabled = true;
			document.getElementById('txtriple').disabled = true;document.getElementById('varyparambtn').disabled = true;
			document.getElementById('varyparamsel').disabled = true;document.getElementById('graphbtn').disabled = true;
			document.getElementById('calculatebtn').disabled = true;
		}
}

function capacitancerippledrop()
{
	
	document.getElementById('txtfreq').value = "";document.getElementById('txtfreq').readOnly=false;
	document.getElementById('txtcap').value = "";document.getElementById('txtcap').readOnly=false;
	document.getElementById('txtlodcrnt').value = "";document.getElementById('txtlodcrnt').readOnly=false;
	document.getElementById('txtriple').value='';document.getElementById('txtdrop').value='';
	document.getElementById('td5').style.visibility='hidden';document.getElementById('td6').style.visibility='hidden';
	document.getElementById('td4').style.visibility="visible";document.getElementById('divtxtrange').style.visibility="visible";
	document.getElementById('divtxtmsg').innerHTML="<div align='center' class='style6'>"+"Enter appropriate values in the textboxes to calculate drop and ripple"+"</div>";lboxcnt=lboxcnt+1;
	document.getElementById('divtxtmsg').style.visibility="visible";document.getElementById('divbtncalc').innerHTML = "";
	document.getElementById('divbtncalc').innerHTML="<input type ='button' id='calculatebtn' value='calculate drop and ripple' onclick='calcripledropcap()' />";
	
}

function calcripledropcap()
{
	
	if(validatetextboxes())
	{		
		if(cap1cnt != 6)
		{
			
			document.getElementById('txtlodcrnt').disabled=true;
			document.getElementById('txtfreq').disabled=true;
			document.getElementById('td5').style.visibility="visible";
			document.getElementById('td6').style.visibility="visible";
			n= parseInt(document.getElementById('txtnmbrofstgs').value); 
			ncube= n*n*n; nsqr=n*n;nplus1= n+1;
			multerm1= f*C;
			divterm1= I/multerm1;
			divterm2=((2*ncube)/3); divterm3= nsqr/2; divterm4=n/6;
			divterm5=nplus1/2;multerm2=n*divterm5;
			addterm1= divterm2+divterm3-divterm4; 
			calcripple = divterm1*multerm2; /*calcripple=calcripple*1000;*/ 
			calcripple=calcripple.toFixed(4);
			calcdrop=(divterm1*addterm1);
			/*calcdrop=calcdrop*1000;*/ calcdrop=calcdrop.toFixed(4);
			document.getElementById('txtriple').value = calcripple;
			document.getElementById('txtriple').readOnly = true;
			document.getElementById('txtdrop').value = calcdrop;
			document.getElementById('txtdrop').readOnly = true;
			
document.getElementById('txtdiv').innerHTML="<div align='justify'>Ripple and Drop Calculations are over with the entered Capacitance value!Enter a different value for capacitance within the input range to continue the experiment</div>";
			document.getElementById('calculatebtn').disabled = true;
			document.getElementById('txtcap').onchange = cleardivscap;
			document.getElementById('cap1sel').options[0].text='0';
			document.getElementById('ripplesel3').options[0].text='0';
			document.getElementById('dropsel3').options[0].text='0';
			cap1cnt = cap1cnt+1; //alert('cap1cntafterincr:'+cap1cnt);
			var cap1txtval= document.getElementById('txtcap').value;
			var riple3txtval= document.getElementById('txtriple').value;
			var drop3txtval = document.getElementById('txtdrop').value;
			var cap1selvar = document.getElementById('cap1sel');
			var riplesel3var = document.getElementById('ripplesel3');
			var dropsel3var = document.getElementById('dropsel3');
			cap1selvar.options[cap1selvar.options.length] = new Option(cap1txtval,cap1txtval);
			riplesel3var.options[riplesel3var.options.length] = new Option(riple3txtval,riple3txtval);
			dropsel3var.options[dropsel3var.options.length] = new Option(drop3txtval,drop3txtval);			
	  
		}
		else
		{	alert('Entered values are sufficient to plot the graph! Click on the button show graph to display graph');			
			document.getElementById('graphdiv').innerHTML ="<input class ='hide' type ='button' id='graphbtn' value='click to show graph' onclick='displaygraphcap1()' />";
			document.getElementById('graphbtn').style.visibility = 'visible';
			document.getElementById('txtcap').disabled = 'disabled';
			document.getElementById('calculatebtn').disabled = true;
		}
	}	
}

function cleardivscap()
{
	document.getElementById('txtdiv').innerHTML = "";
	document.getElementById('calculatebtn').disabled = false;
	//document.getElementById('selratio').disabled = false;
}

function displaygraphcap1()
{
	<!----------------------------------------------------------------->
	var k;
	var cap1sellen = document.getElementById('cap1sel').options.length; //alert(currsellen);
	var riplesel3len = document.getElementById('ripplesel3').options.length;
	var dropsel3len = document.getElementById('dropsel3').options.length;
	var cap1arr = new Array(cap1sellen); 
	var riple3arr= new Array(riplesel3len); 
	var drop3arr = new Array(dropsel3len);
	
	for(k=0;k<cap1sellen;++k)
	{
		cap1arr[k]=parseFloat(document.getElementById('cap1sel').options[k].text);
	}
	
	for(k=0;k<riplesel3len;++k)
	{
		riple3arr[k]=parseFloat(document.getElementById('ripplesel3').options[k].text);
	}
	
	for(k=0;k<dropsel3len;++k)
	{
		drop3arr[k]=parseFloat(document.getElementById('dropsel3').options[k].text);
	}
	var myDatariple = new Array();
	for(var j=0;j<cap1sellen-1;j++){myDatariple[j]= [cap1arr[j+1],riple3arr[j+1]];}
	
	myDatariple.sort(sort1); 
	function sort1(a,b)
	{
       return ((a[0] < b[0]) ? -1 : ((a[0] > b[0]) ? 1 : 0));
	}
	
	var myDatadrop = new Array();
	for(var j=0;j<cap1sellen-1;j++){myDatadrop[j]= [cap1arr[j+1],drop3arr[j+1]];}
	
	myDatadrop.sort(sort1); 
	function sort1(a,b)
	{
       return ((a[0] < b[0]) ? -1 : ((a[0] > b[0]) ? 1 : 0));
	}
	
	var myChart = new JSChart('canvas', 'line');
	//myChart.setDataArray(myData);
	
	myChart.setDataArray(myDatariple,'firstline');
	myChart.setDataArray(myDatadrop,'secondline');
	myChart.setLineColor('#454545');
	myChart.setLineColor('#A4D314','secondline');
	myChart.setTitle('Capacitance Vs. Ripple & Capacitance Vs. Drop');
	myChart.setTitleFontSize(22);
	myChart.setFlagShape('square');
	myChart.setAxisNameX('Capacitance(in Micro F)');
	myChart.setAxisNameY('Ripple & Drop(in V)');
	
	myChart.setAxisNameFontSizeX(15);
	myChart.setAxisNameFontSizeY(15);
	myChart.setAxisNameFontFamilyX('BookmanOldStyle');
	myChart.setAxisNameFontFamilyY('BookmanOldStyle');
	myChart.setAxisPaddingLeft(50);
	myChart.setAxisPaddingTop(70);
	myChart.setAxisPaddingBottom(40);
	myChart.setAxisValuesNumberX(0);
	myChart.setAxisValuesNumberY(0);
	myChart.setLineWidth(4);
	
//for(var j=0;j<currsellen;j++){ myChart.setTooltip([currarr[j],riple1arr[j]]);}
//for(var i=0;i<currsellen;i++){ myChart.setTooltip([currarr[i],drop1arr[i]]);}
	myChart.setLegendShow(true);
	myChart.setLegendPosition(621,15);
	myChart.setLegendForLine('firstline', 'Cap Vs.Ripple');
	myChart.setLegendForLine('secondline', 'Cap Vs.Drop');
		
	myChart.setTitleColor('#7D7D7D');
	myChart.setAxisColor('#9F0505');
	myChart.setGridColor('#a4a4a4');
	myChart.setAxisValuesColor('#333639');
	myChart.setAxisNameColor('#333639');
	myChart.setTextPaddingLeft(0);
	myChart.setSize(700,420);
	myChart.setBackgroundImage('chart_bg.jpg');	myChart.draw();
	document.getElementById('varyparamsel').disabled = false;	document.getElementById('varyparambtn').disabled = false;
	document.getElementById('varyparamsel').options[3].disabled = true;	document.getElementById('graphbtn').disabled =true;
	document.getElementById('txtlodcrnt').disabled = true;
	document.getElementById('txtfreq').disabled = true;
	document.getElementById('txtcap').disabled = true;
	//document.getElementById('txt4').disabled = true;
	document.getElementById('txtdiv').innerHTML = "<div align= 'justify' class ='style4'>Experiment is completed with the parameter chosen! Perform Experiment with another parameter</div>";
	if(lboxcnt==3)
	{
		document.getElementById('txtlodcrnt').disabled = true;document.getElementById('txtfreq').disabled = true;
		document.getElementById('txtcap').disabled = true;document.getElementById('txtdrop').disabled = true;
		document.getElementById('txtriple').disabled = true;document.getElementById('varyparambtn').disabled = true;
		document.getElementById('varyparamsel').disabled = true;document.getElementById('graphbtn').disabled = true;
		document.getElementById('calculatebtn').disabled = true;
	}
	
}

function paramdisable()
{
	document.getElementById('txtfreq').disabled = false;document.getElementById('txtlodcrnt').disabled = false;
	document.getElementById('txtcap').disabled = false;
	document.getElementById('divbtncalc').disabled = false;
	document.getElementById('txtdiv').innerHTML="";
}

function chooseparam()
{	
	var lboxindex = document.getElementById('varyparamsel').selectedIndex;
	if(lboxindex==1)
	{
		document.getElementById('varyparamsel').disabled = true;
		document.getElementById('varyparambtn').disabled = true;
		currentrippledrop();
		
	}
	else if(lboxindex==2)
	{
		document.getElementById('varyparamsel').disabled = true;
		document.getElementById('varyparambtn').disabled = true;
		freqrippledrop();
		
	}
	else if(lboxindex==3)
	{
		document.getElementById('varyparamsel').disabled = true;
		document.getElementById('varyparambtn').disabled = true;
		capacitancerippledrop();
		
	}
	else
	{
		alert('select the parameter from drop-down to vary');
		return false;
	}
}


function reload1()
{
	document.location.href=document.location.href;
}


function calcrippledrop()
{
	if(validatetextboxes())
	{		
			document.getElementById('txtfreq').readOnly=true;document.getElementById('txtcap').readOnly=true;
			document.getElementById('txtlodcrnt').readOnly=true;//document.getElementById('txt4').readOnly=true;
			document.getElementById('td5').style.visibility="visible";document.getElementById('td6').style.visibility="visible";
			n= parseInt(document.getElementById('txtnmbrofstgs').value); ncube= n*n*n; nsqr=n*n;nplus1= n+1;
			multerm1= f*C;
			divterm1= I/multerm1;
			divterm2=((2*ncube)/3); divterm3= nsqr/2; divterm4=n/6;divterm5=nplus1/2;multerm2=n*divterm5;
			addterm1= divterm2+divterm3-divterm4; 
			calcripple = divterm1*multerm2; /*calcripple=calcripple*1000;*/ calcripple=calcripple.toFixed(4);
			calcdrop=(divterm1*addterm1);
			/*calcdrop=calcdrop*1000;*/ calcdrop=calcdrop.toFixed(4);
			document.getElementById('txtriple').value = calcripple;document.getElementById('txtriple').readOnly = true;
			document.getElementById('txtdrop').value = calcdrop;document.getElementById('txtdrop').readOnly = true;
			document.getElementById('varyparamsel').style.visibility="visible";
			document.getElementById('varyparambtn').style.visibility="visible";
			document.getElementById('btncalc').disabled=true;
			document.getElementById('divtxtmsg').innerHTML="<div align='center' class='style6'>"+"Choose a parameter to vary from the right pane and to observe the variation of ripple and drop"+"</div>";
			
	}
}

function validatetextboxes()
{	
	if(document.getElementById('txtfreq').value=="")
	{ 
		document.getElementById('divtxtfreq').innerHTML ="<div class= style2>"+ msg +"frequency(f)"+"</div>";
		document.getElementById('txtfreq').focus();
		return false;
	}
	else if(document.getElementById('txtcap').value == "")
	{ 
		document.getElementById('divtxtcap').innerHTML = "<div class= style2>"+ msg +"Capacitor(C)"+"</div>";
		document.getElementById('txtcap').focus();
		return false;
	}
	else if(document.getElementById('txtlodcrnt').value=="")
	{ 
		document.getElementById('divtxtcrnt').innerHTML ="<div class= style2>"+ msg +"loadCurrent(I)"+"</div>";
		document.getElementById('txtlodcrnt').focus();
		return false;
	}
		
	else
	{ 	
		if(validatetextboxes1())
		{
			document.getElementById('divtxtfreq').innerHTML = "";
			document.getElementById('divtxtcap').innerHTML = "";
			document.getElementById('divtxtcrnt').innerHTML = "";
			//document.getElementById('divtxt4').innerHTML = "";
			return true;
		}	
		
	}
}

function validatetextboxes1()
{ 	
	if(Number(document.getElementById('txtfreq').value < 0))
	{
		alert("Please Enter positive value for frequency(f)");
		document.getElementById('txtfreq').value="";
		document.getElementById('txtfreq').focus(); 
		return false;
	}
	else if(isNaN(document.getElementById('txtfreq').value))
	{
		alert("Please Enter some Number for frequency(f)");
		document.getElementById('txtfreq').value="";
		document.getElementById('txtfreq').focus();
		return false;
	}
	else if(Number(document.getElementById('txtcap').value < 0))
	{
		alert("Please Enter positive value for Capacitance(C)");
		document.getElementById('txtcap').value="";
		document.getElementById('txtcap').focus(); 
		return false;
	}
	else if(isNaN(document.getElementById('txtcap').value))
	{
		alert("Please Enter some Number for Capacitance(C)");
		document.getElementById('txtcap').value="";
		document.getElementById('txtcap').focus();
		return false;
	}
	else if(Number(document.getElementById('txtlodcrnt').value <= 0))
	{
		alert("Please Enter positive value for Load Current(I1)");
		document.getElementById('txtlodcrnt').value="";
		document.getElementById('txtlodcrnt').focus(); 
		return false;
	}
	else if(isNaN(document.getElementById('txtlodcrnt').value))
	{
		alert("Please Enter some Number for Load Current(I1)");
		document.getElementById('txtlodcrnt').value="";
		document.getElementById('txtlodcrnt').focus();
		return false;
	}
	else
	{	
		if(txtboxrange())
		{
		return true;
		}
	}
	
}

function txtboxrange()
{	
		I = parseFloat(document.getElementById('txtlodcrnt').value);
		f = parseInt(document.getElementById('txtfreq').value);
		C = parseFloat(document.getElementById('txtcap').value);
		C = C.toFixed(2);	
		if((f < 50)||(f > 5000))
		{
			document.getElementById('divtxtfreq').innerHTML="<div class= style3>"+msg2+"</div>";
			document.getElementById('txtfreq').value="";
			document.getElementById('txtfreq').focus(); 
			return false;
		}
		else if((C < 0.1)||(C > 2))
		{
			document.getElementById('divtxtcap').innerHTML="<div class= style3>"+msg3+"</div>";
			document.getElementById('txtcap').value="";
			document.getElementById('txtcap').focus(); 
			return false;
		}
		else if((I < 0.1)||(I > 100))
		{
			document.getElementById('divtxtcrnt').innerHTML = "<div class = style3>"+msg1+"</div>"; 
			document.getElementById('txtlodcrnt').value="";
			document.getElementById('txtlodcrnt').focus(); 
			return false;
		}
		else
		{
			return true;
		}
}
<!--------------------------------Interaction with Flash-------------------------------->
function getFlashMovie(movieName)
{	
	if(window.document[movieName]){ return window.document[movieName];}
	if(navigator.appName.indexOf("Microsoft") == -1)
	{ 
		if(document.embeds && document.embeds[movieName])
		{return document.embeds[movieName];	}
		else{return document.getElementById(movieName);}		
	}	
}

function showflash()
{
	var appvol = 1;
	getFlashMovie("multiplier3").sendTextToFlash(appvol);
	showtxtbox();
}

function showtxtbox()
{
	document.getElementById('td1').style.visibility="visible";
	document.getElementById('td2').style.visibility="visible";
	document.getElementById('td3').style.visibility="visible";
	document.getElementById('td4').style.visibility="visible";
	document.getElementById('btncalc').style.visibility="visible";
	document.getElementById('btnrestart').style.visibility="visible";
	document.getElementById('divtxtrange').style.visibility="visible";
	document.getElementById('divtxtmsg').innerHTML="<div align='center' class='style6'>"+"Enter appropriate values in the textboxes to calculate the drop and ripple"+"</div>";
	document.getElementById('divtxtmsg').style.visibility="visible";

}
