var newObject : Transform;
private var timer : float;
private var timeGap : float = 1;
private var number : int = 0;

function Start () {

}

function Update () {

	timer += Time.deltaTime;
	if ((timer > timeGap)&&(number<149)) {
		timer = 0;
		number ++;
		transform.position.x = Random.Range(-40,40);
	    transform.position.z = Random.Range(-40,40);
		Instantiate(newObject, transform.position, transform.rotation);
	}
	
}