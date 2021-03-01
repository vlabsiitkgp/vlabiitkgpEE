// JavaScript Document
//window.onload = visible;
var f,I,I1,f1,C1,C2,C11,calcripple,doublef,divterm1,divterm2,divterm3,multerm1,addterm1,multerm2;var chooseratio;
var riple1cnt=0,riple2cnt=0,riple3cnt=0,riple4cnt=0,freqcnt=0,currcnt=0,cap1cnt=1,cap2cnt=0;var ratioc1c2 = new Array();var C21= new Array();
ratioc1c2[0]=1;ratioc1c2[1]=1.2;ratioc1c2[2]=1.4;ratioc1c2[3]=1.6;ratioc1c2[4]=1.8;ratioc1c2[5]=2;
var msg="**Enter some value for ";
var msg1 = "Please Enter current value between the range 0.1&micro;Amp - 100&micro;Amp";
var msg2 = "Please Enter Frequency value between the range 50Hz - 5000Hz";
var msg3 = "Please Enter Capacitance1 value between the range 0.1&micro;F - 2&micro;F";
var msg4 = "Please Enter Capacitance2 value between the range 0.1&micro;F - 2&micro;F";
var msg5 = 'Please Choose a value from dropdown';

/*function visible()
{
document.getElementById('divbtn').innerHTML="<input type= 'button' onclick = 'showflash()' value= 'click to display the functioning of voltage doubler'></input>";
	
}*/

function currentripple()
{
	document.getElementById('txt1').value = "";document.getElementById('txt1').readOnly=false;
	document.getElementById('txt2').value = "";document.getElementById('txt2').readOnly=false;
	document.getElementById('txt3').value = "";document.getElementById('txt3').readOnly=false;
	document.getElementById('txt4').value = "";document.getElementById('txt4').readOnly=false;
	document.getElementById('td5').style.visibility = 'hidden';
	document.getElementById('divbtn1').innerHTML = "";
document.getElementById('divbtn1').innerHTML="<input type ='button' id='calculatebtn' value='calculate ripple' onclick='calcriplecurr()' />";
}

function calcriplecurr()
{
	if(validatetextboxes())
	{		
		if(currcnt!=6)
		{
			document.getElementById('txt2').disabled=true;document.getElementById('txt3').disabled=true;
			document.getElementById('txt4').disabled=true;
			document.getElementById('td5').style.visibility="visible";
			multerm1= 2*f;
			divterm1= I/multerm1;
			divterm2=1/C2; divterm3= 2/C1;
			addterm1= divterm2+divterm3;
			calcripple=(divterm1*addterm1);
						
			calcripple=calcripple*1000; calcripple=calcripple.toFixed(2);
			document.getElementById('txt5').value = calcripple;
			document.getElementById('txt5').readOnly=true;
document.getElementById('txtdiv').innerHTML="<div align='justify'>Ripple Calculation is over with the entered current value!Enter a different value for current within the input range to continue the experiment</div>";
			document.getElementById('calculatebtn').disabled = true;
			document.getElementById('txt1').onchange = cleardivscurr;
			document.getElementById('currentsel').options[0].text='0';
			document.getElementById('ripplesel1').options[0].text='0';
			currcnt= currcnt+1; //alert('currcntafterincr:'+currcnt);
			var currtxtval= document.getElementById('txt1').value;
			var riple1txtval= document.getElementById('txt5').value;
			var currselvar = document.getElementById('currentsel');
			var riplesel1var = document.getElementById('ripplesel1');
			currselvar.options[currselvar.options.length] = new Option(currtxtval,currtxtval);
			riplesel1var.options[riplesel1var.options.length] = new Option(riple1txtval,riple1txtval);   
		}
		else
		{	alert('Entered values are sufficient to plot the graph! Click on the button show graph to display graph');
			document.getElementById('graphdiv').innerHTML ="<input class ='hide' type ='button' id='graphbtn' value='click to show graph' onclick='displaygraphcurr()' />";
			document.getElementById('graphbtn').style.visibility = 'visible';
			document.getElementById('txt1').disabled = 'disabled';
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
	var currarr = new Array(currsellen); 
	var riple1arr= new Array(riplesel1len);
	
	for(k=0;k<currsellen;++k)
	{
		currarr[k]=parseFloat(document.getElementById('currentsel').options[k].text);
	}
	
	for(k=0;k<riplesel1len;++k)
	{
		riple1arr[k]=parseFloat(document.getElementById('ripplesel1').options[k].text);
	}	
	var myData = new Array();
	for(var j=0;j<currsellen-1;j++){myData[j]= [currarr[j+1],riple1arr[j+1]];}
	
	myData.sort(sort1); 
	function sort1(a,b)
	{
       return ((a[0] < b[0]) ? -1 : ((a[0] > b[0]) ? 1 : 0));
	}
	
	var myChart = new JSChart('canvas', 'line');
	myChart.setDataArray(myData);
	myChart.setLineColor('#8D9386');
	myChart.setDataArray(myData,'firstline');

	myChart.setTitle(' Current Vs. Ripple');
	myChart.setTitleFontSize(22);
	myChart.setFlagShape('square');
	myChart.setAxisNameX('current(in Micro Amp)');
	myChart.setAxisNameY('Ripple(in mV)');
	myChart.setAxisNameFontSizeX(15);
	myChart.setAxisNameFontSizeY(15);
	myChart.setAxisNameFontFamilyX('BookmanOldStyle');
	myChart.setAxisNameFontFamilyY('BookmanOldStyle');
	myChart.setAxisPaddingLeft(40);
	myChart.setAxisPaddingTop(70);
	myChart.setAxisPaddingBottom(40);
	myChart.setAxisValuesNumberX(0);
	myChart.setAxisValuesNumberY(0);
	myChart.setLineWidth(4);
	
	for(var j=0;j<currsellen;j++){ myChart.setTooltip([currarr[j],riple1arr[j]]);}
		
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
	document.getElementById('txt1').disabled = true;document.getElementById('txt2').disabled = true;
	document.getElementById('txt3').disabled = true;document.getElementById('txt4').disabled = true;
		document.getElementById('txtdiv').innerHTML = "<div align= 'justify' class ='style4'>Experiment is completed with the parameter chosen! Perform Experiment with another parameter</div>";
}

function freqripple()
{	
	document.getElementById('txt1').value = "";document.getElementById('txt1').readOnly=false;
	document.getElementById('txt2').value = "";document.getElementById('txt2').readOnly=false;
	document.getElementById('txt3').value = "";document.getElementById('txt3').readOnly=false;
	document.getElementById('txt4').value = "";document.getElementById('txt4').readOnly=false;
	document.getElementById('td5').style.visibility = 'hidden';
	document.getElementById('divbtn1').innerHTML = "";
document.getElementById('divbtn1').innerHTML="<input type ='button' id='calculatebtn' value='calculate ripple' onclick='calcriplefreq()' />";
}

function calcriplefreq()
{
	if(validatetextboxes())
	{		
		if(freqcnt!=6)
		{
document.getElementById('txt1').disabled=true;document.getElementById('txt3').disabled=true;document.getElementById('txt4').disabled=true;
			document.getElementById('td5').style.visibility="visible";
			multerm1= 2*f;
			divterm1= I/multerm1;
			divterm2=1/C2; divterm3= 2/C1;
			addterm1= divterm2+divterm3;
			calcripple=(divterm1*addterm1);
			calcripple=calcripple*1000; calcripple=calcripple.toFixed(2);
			document.getElementById('txt5').value = calcripple;
			document.getElementById('txt5').readOnly=true;
document.getElementById('txtdiv').innerHTML="<div align='justify'>Ripple Calculation is over with the entered frequency value!Enter a different value for frequency within the input range to continue the experiment</div>";
			document.getElementById('calculatebtn').disabled = true;
			document.getElementById('txt2').onchange = cleardivsfreq;
			document.getElementById('freqsel').options[0].text='0';
			document.getElementById('ripplesel2').options[0].text='0';
			freqcnt= freqcnt+1; //alert('freqcntafterincr:'+freqcnt);
			var freqtxtval= document.getElementById('txt2').value;
			var riple2txtval= document.getElementById('txt5').value;
			var freqselvar = document.getElementById('freqsel');
			var riplesel2var = document.getElementById('ripplesel2');
			freqselvar.options[freqselvar.options.length] = new Option(freqtxtval,freqtxtval);
			riplesel2var.options[riplesel2var.options.length] = new Option(riple2txtval,riple2txtval);   
		}
		else
		{	alert('Entered values are sufficient to plot the graph! Click on the button show graph to display graph');			
			document.getElementById('graphdiv').innerHTML ="<input class ='hide' type ='button' id='graphbtn' value='click to show graph' onclick='displaygraphfreq()' />";
			document.getElementById('graphbtn').style.visibility = 'visible';
			document.getElementById('txt2').disabled = 'disabled';
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
	var k;
	var freqsellen = document.getElementById('freqsel').options.length; //alert('freqsellen:'+freqsellen);
	var riplesel2len = document.getElementById('ripplesel2').options.length;
	var freqarr = new Array(freqsellen); var riple2arr= new Array(riplesel2len);
	
	for(k=0;k<freqsellen;++k)
	{
		freqarr[k]=parseFloat(document.getElementById('freqsel').options[k].text);
	}
	
	for(k=0;k<riplesel2len;++k)
	{
		riple2arr[k]=parseFloat(document.getElementById('ripplesel2').options[k].text);
	}
	
	var myData = new Array();
	for(var j=0;j<freqsellen-1;j++){myData[j]= [freqarr[j+1],riple2arr[j+1]];}
	//alert("myData:"+myData); 
	myData.sort(sort1); 
	function sort1(a,b)
	{
       return ((a[0] < b[0]) ? -1 : ((a[0] > b[0]) ? 1 : 0));
	}
	//alert('myDataaftersort:'+myData);
	var myChart = new JSChart('canvas', 'line');
	myChart.setDataArray(myData);
	myChart.setLineColor('#8D9386');
	myChart.setDataArray(myData,'firstline');

	myChart.setTitle('Frequency Vs. Ripple');
	myChart.setTitleFontSize(22);
	myChart.setFlagShape('square');
	myChart.setAxisNameX('frequency(in Hz)');
	myChart.setAxisNameY('Ripple(in mV)');
	myChart.setAxisNameFontSizeX(15);
	myChart.setAxisNameFontSizeY(15);
	myChart.setAxisNameFontFamilyX('BookmanOldStyle');
	myChart.setAxisNameFontFamilyY('BookmanOldStyle');
	myChart.setAxisPaddingLeft(40);
	myChart.setAxisPaddingTop(70);
	myChart.setAxisPaddingBottom(40);
	myChart.setAxisValuesNumberX(0);
	myChart.setAxisValuesNumberY(0);
	myChart.setLineWidth(4);
	
	for(var j=0;j<freqsellen;j++){ myChart.setTooltip([freqarr[j],riple2arr[j]]);}
		
	myChart.setTitleColor('#7D7D7D');
	myChart.setAxisColor('#9F0505');
	myChart.setGridColor('#a4a4a4');
	myChart.setAxisValuesColor('#333639');
	myChart.setAxisNameColor('#333639');
	myChart.setTextPaddingLeft(0);
	myChart.setSize(700,420);
	myChart.setBackgroundImage('chart_bg.jpg');
	myChart.draw();
	document.getElementById('varyparamsel').disabled = false;document.getElementById('varyparambtn').disabled = false;
	document.getElementById('varyparamsel').options[2].disabled = true; document.getElementById('graphbtn').disabled =true;
	document.getElementById('txt1').disabled = true;document.getElementById('txt2').disabled = true;
	document.getElementById('txt3').disabled = true;document.getElementById('txt4').disabled = true;
		document.getElementById('txtdiv').innerHTML = "<div align= 'justify' class ='style4'>Experiment is completed with the parameter chosen! Perform Experiment with another parameter</div>";
}

function capacitance1ripple()
{
	document.getElementById('txt1').value = "";document.getElementById('txt1').readOnly=false;
	document.getElementById('txt2').value = "";document.getElementById('txt2').readOnly=false;
	document.getElementById('txt3').value = "";document.getElementById('txt3').readOnly=false;
	document.getElementById('txt4').value = "";document.getElementById('txt4').readOnly=false;
	document.getElementById('td4').style.visibility = 'hidden';
	document.getElementById('td5').style.visibility = 'hidden';document.getElementById('td6').style.visibility = 'visible';
	document.getElementById('divbtn1').innerHTML = "";
	var Str = "<select id='selratio'>";
	Str +="<option></option>";
	Str +="<option value=" + ratioc1c2[0] + ">"+ ratioc1c2[0] +"</option>";
	Str +="<option value=" + ratioc1c2[1] + ">"+ ratioc1c2[1] +"</option>";
	Str +="<option value=" + ratioc1c2[2] + ">"+ ratioc1c2[2] +"</option>";
	Str +="<option value=" + ratioc1c2[3] + ">"+ ratioc1c2[3] +"</option>";
	Str +="<option value=" + ratioc1c2[4] + ">"+ ratioc1c2[4] +"</option>";
Str +="<option value=" + ratioc1c2[5] + ">"+ ratioc1c2[5] +"</option></select>";
	document.getElementById("divratio").innerHTML=Str;
document.getElementById('divbtn1').innerHTML="<input type ='button' id='calculatebtn' value='calculate ripple' onclick='calcriplecap1()' />";
}

function calcriplecap1()
{
	if(validatetextboxes5())
	{		
		
		if(cap1cnt==6)
		{	
			document.getElementById('td5').style.visibility="visible";
			multerm1= 2*f1;
			divterm1= I1/multerm1;
			divterm3= 2/C11;divterm2= getratiosel();
			addterm1= divterm2+divterm3;
			calcripple=(divterm1*addterm1);
			
			
			calcripple=calcripple*1000;calcripple=calcripple.toFixed(2); 
			
			document.getElementById('txt5').value = calcripple;	
			document.getElementById('txt5').readOnly=true;
			document.getElementById('calculatebtn').disabled = true;
			var cap1txtval= document.getElementById('selratio').options[chooseratio].value;
			var riple3txtval= document.getElementById('txt5').value;
			var cap1selvar = document.getElementById('cap1sel');
			var riplesel3var = document.getElementById('ripplesel3');
			cap1selvar.options[cap1selvar.options.length] = new Option(cap1txtval,cap1txtval);
			riplesel3var.options[riplesel3var.options.length] = new Option(riple3txtval,riple3txtval);   
		
			document.getElementById('selratio').options[chooseratio].disabled=true;
			document.getElementById('graphdiv').innerHTML ="<input class ='hide' type ='button' id='graphbtn' value='click to show graph' onclick='displaygraphcap1()' />";
			document.getElementById('graphbtn').style.visibility = 'visible';
			document.getElementById('calculatebtn').disabled = true;

		}
		else
		{	
			document.getElementById('txt1').disabled=true;document.getElementById('txt2').disabled=true;
			document.getElementById('txt4').disabled=true;document.getElementById('txt3').disabled=true;
			document.getElementById('td4').style.visibility = 'visible';
			document.getElementById('td5').style.visibility="visible";
			multerm1= 2*f1;
			divterm1= I1/multerm1;
			divterm3= 2/C11;divterm2= getratiosel();
			addterm1= divterm2+divterm3;
			calcripple=(divterm1*addterm1);
			calcripple=calcripple*1000;calcripple=calcripple.toFixed(2); 
			document.getElementById('txt5').value = calcripple;	
			document.getElementById('txt5').readOnly=true;
document.getElementById('txtdiv').innerHTML="<div align='justify'>Ripple Calculation is over with the chosen ratio value!chose a different ratio value to continue the experiment</div>";
			document.getElementById('calculatebtn').disabled = true;
			document.getElementById('selratio').onchange = cleardivscap1;
			cap1cnt= cap1cnt+1; //alert('cap1cntafterincr:'+cap1cnt);
			var cap1txtval= document.getElementById('selratio').options[chooseratio].value;
			var riple3txtval= document.getElementById('txt5').value;
			var cap1selvar = document.getElementById('cap1sel');
			var riplesel3var = document.getElementById('ripplesel3');
			cap1selvar.options[cap1selvar.options.length] = new Option(cap1txtval,cap1txtval);
			riplesel3var.options[riplesel3var.options.length] = new Option(riple3txtval,riple3txtval);   
			document.getElementById('selratio').options[chooseratio].disabled=true;
		}
	}	
}

function cleardivscap1()
{
	document.getElementById('txtdiv').innerHTML = "";
	document.getElementById('calculatebtn').disabled = false;
	document.getElementById('selratio').disabled = false;
}

function displaygraphcap1()
{
	var k;
	var cap1sellen = document.getElementById('cap1sel').options.length; 	//alert('cap1sellen:'+cap1sellen);
	var riplesel3len = document.getElementById('ripplesel3').options.length;
	var cap1arr = new Array(cap1sellen); var riple3arr= new Array(riplesel3len);
	
	for(k=0;k<cap1sellen;++k)
	{
		cap1arr[k]=parseFloat(document.getElementById('cap1sel').options[k].text);	}   //alert('cap1arr:'+cap1arr);
	for(k=0;k<riplesel3len;++k)
	{
		riple3arr[k]=parseFloat(document.getElementById('ripplesel3').options[k].text);	}   //alert('riple3arr:'+riple3arr);
		var myData = new Array();
		for(var j=0;j<riplesel3len;j++){myData[j]= [cap1arr[j],riple3arr[j]];}	//alert("myData:"+myData); 
		myData.sort(sort1); 
		function sort1(a,b)
		{
       		return ((a[0] < b[0]) ? -1 : ((a[0] > b[0]) ? 1 : 0));
		}//alert('myDataaftersort:'+myData);
		var myChart = new JSChart('canvas', 'line');
		myChart.setDataArray(myData);
		myChart.setLineColor('#8D9386');
		myChart.setDataArray(myData,'firstline');

		myChart.setTitle('Capcitance1 Vs. Ripple');
		myChart.setTitleFontSize(22);
		myChart.setFlagShape('square');
		myChart.setAxisNameY('Ripple(in mV)');
		myChart.setAxisNameX('Ratio(C1/C2)');
		myChart.setAxisNameFontSizeX(15);
		myChart.setAxisNameFontSizeY(15);
		myChart.setAxisNameFontFamilyX('BookmanOldStyle');
		myChart.setAxisNameFontFamilyY('BookmanOldStyle');
		myChart.setAxisPaddingLeft(40);
		myChart.setAxisPaddingTop(70);
		myChart.setAxisPaddingBottom(40);
		myChart.setAxisValuesNumberX(0);
		myChart.setAxisValuesNumberY(0);
		myChart.setLineWidth(4);
		for(var j=0;j<riplesel3len;j++){ myChart.setTooltip([cap1arr[j],riple3arr[j]]);}
		myChart.setTitleColor('#7D7D7D');
		myChart.setAxisColor('#9F0505');
		myChart.setGridColor('#a4a4a4');
		myChart.setAxisValuesColor('#333639');
		myChart.setAxisNameColor('#333639');
		myChart.setTextPaddingLeft(0);
		myChart.setSize(700,420);
		myChart.setBackgroundImage('chart_bg.jpg');
		myChart.draw();
		document.getElementById('varyparamsel').disabled = false;document.getElementById('varyparambtn').disabled = false;
		document.getElementById('varyparamsel').options[3].disabled = true; document.getElementById('graphbtn').disabled =true;
		document.getElementById('txt1').disabled = true;document.getElementById('txt2').disabled = true;
		document.getElementById('txt3').disabled = true;document.getElementById('txt4').disabled = true;
		document.getElementById('selratio').disabled = true;
		document.getElementById('txtdiv').innerHTML = "<div align= 'justify' class ='style4'>Experiment is completed with the parameter chosen! Perform Experiment with another parameter</div>";
}

function paramdisable()
{
	document.getElementById('txt1').disabled = false;document.getElementById('txt2').disabled = false;
	document.getElementById('txt3').disabled = false;document.getElementById('txt4').disabled = false;
	document.getElementById('txt5').disabled = false;document.getElementById('divbtn1').disabled = false;
	document.getElementById('txtdiv').innerHTML="";document.getElementById('td6').style.visibility = 'hidden';
}

function chooseparam()
{	
	var lboxindex = document.getElementById('varyparamsel').selectedIndex;
	if(lboxindex==1)
	{
		document.getElementById('varyparamsel').disabled = true;
		document.getElementById('varyparambtn').disabled = true;
		currentripple();
		
	}
	else if(lboxindex==2)
	{
		document.getElementById('varyparamsel').disabled = true;
		document.getElementById('varyparambtn').disabled = true;
		freqripple();
		
	}
	else if(lboxindex==3)
	{
		document.getElementById('varyparamsel').disabled = true;
		document.getElementById('varyparambtn').disabled = true;
		capacitance1ripple();
		
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


function calculateripple()
{
	if(validatetextboxes())
	{		
			document.getElementById('txt1').readOnly=true;document.getElementById('txt2').readOnly=true;
			document.getElementById('txt3').readOnly=true;document.getElementById('txt4').readOnly=true;
			document.getElementById('td5').style.visibility="visible";
			multerm1= 2*f;
			divterm1= I/multerm1;
			divterm2=1/C2; divterm3= 2/C1;
			addterm1= divterm2+divterm3;
			calcripple=(divterm1*addterm1);
			calcripple=calcripple*1000; calcripple=calcripple.toFixed(2);
			document.getElementById('txt5').value = calcripple;document.getElementById('txt5').readOnly = true;
			document.getElementById('varyparamsel').style.visibility="visible";
			document.getElementById('varyparambtn').style.visibility="visible";
			document.getElementById('btn1').disabled=true;
			document.getElementById('intrtxt').innerHTML="<div align='center' class='style6'>"+"Choose a parameter to vary from the right pane and to observe the variation of ripple"+"</div>";
			
	}
}

function validatetextboxes()
{	
	if(document.getElementById('txt1').value=="")
	{ 
		document.getElementById('divtxt1').innerHTML ="<div class= style2>"+ msg +"loadCurrent(I)"+"</div>";
		document.getElementById('txt1').focus();
		return false;
	}
		
	else if(document.getElementById('txt2').value=="")
	{ 
		document.getElementById('divtxt2').innerHTML ="<div class= style2>"+ msg +"frequency(f)"+"</div>";
		document.getElementById('txt2').focus();
		return false;
	}
	else if(document.getElementById('txt3').value == "")
	{ 
		document.getElementById('divtxt3').innerHTML = "<div class= style2>"+ msg +"CapacitorC<sub>1</sub>"+"</div>";
		document.getElementById('txt3').focus();
		return false;
	}
	else if(document.getElementById('txt4').value=="")
	{ 
		document.getElementById('divtxt4').innerHTML = "<div class= style2>"+ msg +"CapacitorC<sub>2</sub>"+"</div>";
		document.getElementById('txt4').focus();
		return false;
	}
	else
	{ 	
		if(validatetextboxes1())
		{
			document.getElementById('divtxt1').innerHTML = "";
			document.getElementById('divtxt2').innerHTML = "";
			document.getElementById('divtxt3').innerHTML = "";
			document.getElementById('divtxt4').innerHTML = "";
			return true;
		}	
		
	}
}

function validatetextboxes1()
{ 	
	if(Number(document.getElementById('txt1').value < 0))
	{
		alert("Please Enter positive value for Current(I)");
		document.getElementById('txt1').value="";
		document.getElementById('txt1').focus(); 
		return false;
	}
	else if(isNaN(document.getElementById('txt1').value))
	{
		alert("Please Enter some Number for Current(I)");
		document.getElementById('txt1').value="";
		document.getElementById('txt1').focus();
		return false;
	}
	else if(Number(document.getElementById('txt2').value < 0))
	{
		alert("Please Enter positive value for Frequency(f)");
		document.getElementById('txt2').value="";
		document.getElementById('txt2').focus(); 
		return false;
	}
	else if(isNaN(document.getElementById('txt2').value))
	{
		alert("Please Enter some Number for Frequency(f)");
		document.getElementById('txt2').value="";
		document.getElementById('txt2').focus();
		return false;
	}
	else if(Number(document.getElementById('txt3').value <= 0))
	{
		alert("Please Enter positive value for Capacitance(C1)");
		document.getElementById('txt3').value="";
		document.getElementById('txt3').focus(); 
		return false;
	}
	else if(isNaN(document.getElementById('txt3').value))
	{
		alert("Please Enter some Number for Capacitance(C1)");
		document.getElementById('txt3').value="";
		document.getElementById('txt3').focus();
		return false;
	}
	else if(Number(document.getElementById('txt4').value <= 0))
	{
		alert("Please Enter positive value for Capacitance(C2)");
		document.getElementById('txt4').value="";
		document.getElementById('txt4').focus(); 
		return false;
	}
	else if(isNaN(document.getElementById('txt4').value))
	{
		alert("Please Enter some Number for Capacitance(C2)");
		document.getElementById('txt4').value="";
		document.getElementById('txt4').focus();
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
		I = parseFloat(document.getElementById('txt1').value);
		f = parseInt(document.getElementById('txt2').value);
		C1 = parseFloat(document.getElementById('txt3').value);
		C2 = parseFloat(document.getElementById('txt4').value);
		C1 = C1.toFixed(2);C2= C2.toFixed(2);
		var C3= C1/C2;C3= C3.toFixed(2);
		if((I < 0.1)||(I > 100))
		{
			document.getElementById('divtxt1').innerHTML = "<div class = style3>"+msg1+"</div>"; 
			document.getElementById('txt1').value="";
			document.getElementById('txt1').focus(); 
			return false;
		}
		else if((f < 50)||(f > 5000))
		{
			document.getElementById('divtxt2').innerHTML="<div class= style3>"+msg2+"</div>";
			document.getElementById('txt2').value="";
			document.getElementById('txt2').focus(); 
			return false;
		}
		else if((C1 < 0.1)||(C1 > 2))
		{
			document.getElementById('divtxt3').innerHTML="<div class= style3>"+msg3+"</div>";
			document.getElementById('txt3').value="";
			document.getElementById('txt3').focus(); 
			return false;
		}
		else if((C2 < 0.1)||(C2 > 2))
		{
			document.getElementById('divtxt4').innerHTML="<div class= style3>"+msg4+"</div>";
			document.getElementById('txt4').value="";
			document.getElementById('txt4').focus(); 
			return false;
		}
		else if(C1<C2)
		{
			alert('Please Enter C1 value such that C1 should be greater than C2');
			return false;
		}
		else if((C3<1)||(C3>2))
		{
			alert('Please Enter C1 and C2 values such that C1/C2 ratio should be in the range of 1-2');
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
	getFlashMovie("doubler").sendTextToFlash(appvol);
	showtxtbox();
}

function showtxtbox()
{
	document.getElementById('td1').style.visibility="visible";
	document.getElementById('td2').style.visibility="visible";
	document.getElementById('td3').style.visibility="visible";
	document.getElementById('td4').style.visibility="visible";
	document.getElementById('btn1').style.visibility="visible";
	document.getElementById('btn2').style.visibility="visible";
	document.getElementById('divtxt5').style.visibility="visible";
	document.getElementById('intrtxt').innerHTML="<div align='center' class='style6'>"+"Enter appropriate values in the textboxes to calculate the ripple"+"</div>";
	document.getElementById('intrtxt').style.visibility="visible";

}

<!----------------------------------------------------------------------------->
function validatetextboxes5()
{	
	if(document.getElementById('txt1').value=="")
	{ 
		document.getElementById('divtxt1').innerHTML ="<div class= style2>"+ msg +"loadCurrent(I)"+"</div>";
		document.getElementById('txt1').focus();
		return false;
	}
		
	else if(document.getElementById('txt2').value=="")
	{ 
		document.getElementById('divtxt2').innerHTML ="<div class= style2>"+ msg +"frequency(f)"+"</div>";
		document.getElementById('txt2').focus();
		return false;
	}
	else if(document.getElementById('txt3').value == "")
	{ 
		document.getElementById('divtxt3').innerHTML = "<div class= style2>"+ msg +"CapacitorC<sub>1</sub>"+"</div>";
		document.getElementById('txt3').focus();
		return false;
	}
	else
	{ 	
		if(validatetextboxes6())
		{
			document.getElementById('divtxt1').innerHTML = "";
			document.getElementById('divtxt2').innerHTML = "";
			document.getElementById('divtxt3').innerHTML = "";
			document.getElementById('divtxt6').innerHTML = "";
			return true;
		}	
		
	}
}

function validatetextboxes6()
{ 	
	if(Number(document.getElementById('txt1').value < 0))
	{
		alert("Please Enter positive value for Current(I)");
		document.getElementById('txt1').value="";
		document.getElementById('txt1').focus(); 
		return false;
	}
	else if(isNaN(document.getElementById('txt1').value))
	{
		alert("Please Enter some Number for Current(I)");
		document.getElementById('txt1').value="";
		document.getElementById('txt1').focus();
		return false;
	}
	else if(Number(document.getElementById('txt2').value < 0))
	{
		alert("Please Enter positive value for Frequency(f)");
		document.getElementById('txt2').value="";
		document.getElementById('txt2').focus(); 
		return false;
	}
	else if(isNaN(document.getElementById('txt2').value))
	{
		alert("Please Enter some Number for Frequency(f)");
		document.getElementById('txt2').value="";
		document.getElementById('txt2').focus();
		return false;
	}
	else if(Number(document.getElementById('txt3').value <= 0))
	{
		alert("Please Enter positive value for Capacitance(C1)");
		document.getElementById('txt3').value="";
		document.getElementById('txt3').focus(); 
		return false;
	}
	else if(isNaN(document.getElementById('txt3').value))
	{
		alert("Please Enter some Number for Capacitance(C1)");
		document.getElementById('txt3').value="";
		document.getElementById('txt3').focus();
		return false;
	}
	else
	{	
		if(txtboxrange2())
		{
		return true;
		}
	}
	
}

function txtboxrange2()
{	
		I1 = parseFloat(document.getElementById('txt1').value);
		f1 = parseInt(document.getElementById('txt2').value);
		C11 = parseFloat(document.getElementById('txt3').value);
		C11 = C11.toFixed(2);
		
		if((I < 0.1)||(I > 100))
		{
			document.getElementById('divtxt1').innerHTML = "<div class = style3>"+msg1+"</div>"; 
			document.getElementById('txt1').value="";
			document.getElementById('txt1').focus(); 
			return false;
		}
		else if((f < 50)||(f > 5000))
		{
			document.getElementById('divtxt2').innerHTML="<div class= style3>"+msg2+"</div>";
			document.getElementById('txt2').value="";
			document.getElementById('txt2').focus(); 
			return false;
		}
		else if((C1 < 0.1)||(C1 > 2))
		{
			document.getElementById('divtxt3').innerHTML="<div class= style3>"+msg3+"</div>";
			document.getElementById('txt3').value="";
			document.getElementById('txt3').focus(); 
			return false;
		}
		else if(document.getElementById('selratio').selectedIndex==0)
		{
			document.getElementById('divtxt6').innerHTML = "<div class= style2>Please choose a value from dropdown</div>";
			document.getElementById('selratio').focus();
			return false;
		}
		else
		{	
			return true;
		}
}

function getratiosel()
{	
		chooseratio = document.getElementById('selratio').selectedIndex;
		for(var l=0;l<6;l++)
		{
			C21[l]= C11/ratioc1c2[l];C21[l]=C21[l].toFixed(2);
		}
		if(chooseratio==1)
		{
			divterm2=(1/C21[0]);
			document.getElementById('txt4').value=C21[0];
			return divterm2;
		}
		else if(chooseratio==2)
		{
			divterm2=(1/C21[1]);
			document.getElementById('txt4').value=C21[1];
			return divterm2;
		}
		else if(chooseratio==3)
		{
			divterm2=(1/C21[2]);
			document.getElementById('txt4').value=C21[2];
			return divterm2;
		}
		else if(chooseratio==4)
		{
			divterm2=(1/C21[3]);
			document.getElementById('txt4').value=C21[3];
			return divterm2;
		}
		else if(chooseratio==5)
		{
			divterm2=(1/C21[4]);
			document.getElementById('txt4').value=C21[4];
			return divterm2;
		}
		else if(chooseratio==6)
		{
			divterm2=(1/C21[5]);
			document.getElementById('txt4').value=C21[5];
			return divterm2;
		}
}

