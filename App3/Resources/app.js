/* 
 * Seth Rathbun
 * Bus353
 * Application 3
 * Spring 2015
 */

var pages = Ti.UI.createTabGroup();

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
var Tab1 = Ti.UI.createTab({
	title:'Tea',
	window: win1
});

var win2 = Ti.UI.createWindow({
	backgroundColor: #fff
});

var options = TI.UI.createView({
	layout:'vertical'
});

var showCamera = Ti.UI.createButton({
	title: 'Show Camera'
});

var thePhoto = Ti.UI.createImageView({
	height: '30%',
	width: '30%'
});

var Tab2 = TI.UI.createTab({
	title: 'Camera',
	window: win2
});

win1.add(theColours);
options.add(showCamera);
options.add(thePhoto);
win2.add(options);
pages.add(Tab1);
pages.add(Tab2);

pages.open();


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

function showPhoto(_args){
	thePhoto.setImage(_args.media);
}

showCamera.addEventListener('click', function(e) {
	Ti.Media.showCamera({animated: true,
		autoHide: true,
		saveToPhotoGallery: true,
		showControls: true,
		mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO],
		success: function(e) {showPhoto(e)},
		error: function (e) {alert('There was a problem accessing the camera')}
	})
});