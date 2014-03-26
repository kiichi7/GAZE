#pragma strict
private var speed = 50.0;
//var moveDirection : Vector3 = Vector3.zero;
//var gravity : float = 10.0;

function Start () {
	transform.RotateAround (Vector3.zero, Vector3.up, Random.Range(0,360));
}

function Update () {


	var x = Input.GetAxis("Horizontal") * Time.deltaTime * speed;
	var z = Input.GetAxis("Vertical") * Time.deltaTime * speed;
	
    transform.Translate(x,0,z);
        
}