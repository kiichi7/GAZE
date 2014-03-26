var newObject : Transform;
private var timer : float;
private var timeGap : float = 0.5;
private var number : int = 0;

function Start () {

}

function Update () {

	timer += Time.deltaTime;
	if ((timer > timeGap)&&(number<199)) {
		timer = 0;
		number ++;
		transform.position.x = Random.Range(-90,90);
	    transform.position.z = Random.Range(-90,90);
		Instantiate(newObject, transform.position, transform.rotation);
	}
	
}