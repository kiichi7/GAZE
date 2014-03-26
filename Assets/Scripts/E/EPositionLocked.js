#pragma strict

function Start () {

}

function Update () {


	if (transform.position.y < -200) transform.position.y += 400;
	if (Mathf.Abs(transform.position.x) > 50) transform.position.x = Random.Range(-45,45);
	if (Mathf.Abs(transform.position.z) > 50) transform.position.z = Random.Range(-45,45);
}