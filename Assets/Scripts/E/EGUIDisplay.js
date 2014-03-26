static var timeLeft : float;
private var timeLeftInt : int;
private var lastTimeLeftInt : int;
private var isOver : boolean = false;
private var finalScore : int;
private var startingTimer : float = 0;

function Start () {

	timeLeft = 101.0;

}

function Update () {
	
	if(Input.anyKey) startingTimer = 100;
	startingTimer += Time.deltaTime;
	timeLeft -= Time.deltaTime;
	timeLeftInt = timeLeft;
	if (timeLeftInt != lastTimeLeftInt) {
		Score.gameScore++;
		lastTimeLeftInt = timeLeftInt;
		}
	if (timeLeft < 0) isOver = true;
	
}

function OnGUI () {

	if (startingTimer < 100) {
		GUI.Label(Rect(Screen.width/2 - 100 , Screen.height/2 - 30 , 300, 100),"gazE\n\nAway from my side, under the sky.\nGive you love, time goes die.\nI'll be always watching you.\nWill you be just more careful?");
	}
	else if (!isOver){
		GUI.Label(Rect(20, 20, 100, 100),"Lover: " + Score.gameScore);
		GUI.Label(Rect(Screen.width - 100, 20, 100, 100),"Time: " + timeLeftInt);
		finalScore = Score.gameScore;
	}
	else {
		GUI.Label(Rect(Screen.width/2 - 100 , Screen.height/2 - 30 , 300, 100),"You get " + finalScore + " lovers' Love");
		GUI.Label(Rect(Screen.width/2 - 100 , Screen.height/2 , 300, 100),"Press Enter or Space to play again.");
		GUI.Label(Rect(Screen.width/2 - 100 , Screen.height/2 + 30, 300, 100),"Or press Esc to leave the sky.");
		if(Input.GetKeyDown(KeyCode.Space)||Input.GetKeyDown(KeyCode.Return)) {
			Score.gameScore = 0;
			Application.LoadLevel("E");
		}
	}
}

