#pragma strict

function Start () {
	
	Screen.showCursor = false;
	
}

function Update () {

	if(Input.GetKeyDown(KeyCode.Escape)) {
		Score.gameScore = 0;
		Application.LoadLevel("Starter");
		}
}