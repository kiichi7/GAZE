#pragma strict

function Start () {
	
}

function Update () {

	//transform.LookAt(GameObject.Find("Me").transform);
	var targetRotation = Quaternion.LookRotation(GameObject.Find("Me").transform.position - transform.position,Vector3.up);
	transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, Time.deltaTime * 1.0);

}