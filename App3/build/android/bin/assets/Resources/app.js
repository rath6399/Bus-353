/* 
 * Seth Rathbun
 * Bus353
 * Application 3
 * Spring 2015
 */

(function(){
	var win1 = Titanium.UI.createWindow({
		title: 'Select Color',
		backgroundColor: '#fff'
	});
	var Teas = ['#F5F5DC', '#FFE4B5', '#FFE4C4', '#D2B48C', 
'#C3B091', '#C3B091', '#926F5B', '#80400', '#654321',
'#3D2B1F' ];

	allRows = [];
	var theColours = Ti.UI.createTableView({});

	for (var i=0; i<Teas.length; i++){
		theRow = Ti.UI.createTableView({
			backgroundColor: Teas[i],
			height: 50,
			TeaColour: Teas[i]
		});
		allRows.push(theRow);
};

	theColours.setData(allRows);
	
	theColours.addEventListener('click', function(e){
		showTeaVerdict(e.source.TeaColour);
	});
	
	win1.add(theColours);
	win1.open;
})();


function getVerdict(colour){
	var indicator = colour.charAt(1);
	var msg;
	
	switch(indicator){
		case 'F': msg = 'Milky'; break;
		case 'D': msg = 'Nice'; break;
		case 'C': msg = 'Perfect'; break;
		case '9': msg = 'A bit strong'; break;
		case '8': msg = 'Builders tea'; break;
		case '6': msg = 'Send it back'; break;
		case '3': msg = 'No milk here'; break;
	};
	return msg;
};

function showTeaVerdict(_args) {
	var teaVerdict = Ti.UI.createWindow({
		layout: 'vertical'
	});
	teaVerdict.backgroundColor = _args;
	teaVerdict.msg = getVerdict(_args);
	var judgement = Ti.UI.createLabel({
		text: teaVerdict.msg,
		top: '50%'
	});
	var close = Ti.UI.createButton({
		title: 'Choose again',
		top: '25%'
	});
	close.addEventListener('click', function(e){
		teaVerdict.close();
		teaVerdict = null;
	});
	
	teaVerdict.add(judgement);
	teaVerdict.add(close);
	teaVerdict.open;
};



/*theColours.addEventListener('click', function(e){
	showTeaVerdict(e.source.TeaColour);
	});
*/