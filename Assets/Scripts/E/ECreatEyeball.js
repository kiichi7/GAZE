var newObject : Transform;
private var timer : float;
private var timeGap : float = 0.1;
private var number : int = 0;

function Start () {

}

function Update () {

	timer += Time.deltaTime;
	if ((timer > timeGap)&&(number<99)) {
		timer = 0;
		number ++;
		transform.position.x = Random.Range(-45,45);
	    transform.position.z = Random.Range(-45,45);
		Instantiate(newObject, transform.position, transform.rotation);
	}
	
}