


function preload() {
	//carregar os sons
	
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	//poseNet = ml5.poseNet(video, modelLoaded);
	//poseNet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log('Model Loaded!');
  }

  function gotPoses(results)
  {
	if(results.length > 0)	{
	  console.log(results);
	  narizX = results[0].pose.nose.x;
	  narizY = results[0].pose.nose.y;
	}
  }
   
function draw() {
	game();
}






