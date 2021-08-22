var canvas = new fabric.Canvas('myCanvas');
 var x = document.getElementById("myAudio");

function newimage()
{
	fabric.Image.formURL('BirthdayImage.jpg',function img(){
        blockImageTag = img;

        blockImageTag.object.scaleToWidth(700);
        blockImageTag.object.scaleToHeight(610);
        blockImageTag.object.set({top:0,left:0});
        canvas.add(blockImageTag);
    });
	
}

function playSound()
{
	bdayaudio.play();
}
