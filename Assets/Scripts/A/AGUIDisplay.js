static var timeLeft : float;
private var timeLeftInt : int;
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
	if (timeLeft < 0) isOver = true;
	
}

function OnGUI () {

	if (startingTimer < 100) {
		GUI.Label(Rect(Screen.width/2 - 100 , Screen.height/2 - 30 , 300, 100),"gAze\n\nKick my ass, in the box.\nGive me free, my dear lover.\nI'll be always counting on you.\nWill you be always helping me?");
	}
	else if (!isOver){
		GUI.Label(Rect(20, 20, 100, 100),"Lover: " + Score.gameScore);
		GUI.Label(Rect(Screen.width - 100, 20, 100, 100),"Time: " + timeLeftInt);
		finalScore = Score.gameScore;
	}
	else {
		GUI.Label(Rect(Screen.width/2 - 100 , Screen.height/2 - 30 , 300, 100),"You get " + finalScore + " lovers' Love");
		GUI.Label(Rect(Screen.width/2 - 100 , Screen.height/2 , 300, 100),"Press Enter or Space to play again.");
		GUI.Label(Rect(Screen.width/2 - 100 , Screen.height/2 + 30, 300, 100),"Or press Esc to leave the box.");
		if(Input.GetKeyDown(KeyCode.Space)||Input.GetKeyDown(KeyCode.Return)) {
			Score.gameScore = 0;
			Application.LoadLevel("A");
		}
	}
}

