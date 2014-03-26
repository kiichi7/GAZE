#pragma strict

function Start () {

}

function Update () {

	if ((transform.position.y < 100)&&((transform.position.y < 0)||(Mathf.Abs(transform.position.x) > 50)||(Mathf.Abs(transform.position.z) > 50))) {
		Score.gameScore ++;
		AGUIDisplay.timeLeft += 2;
		Destroy(gameObject);
	}

}