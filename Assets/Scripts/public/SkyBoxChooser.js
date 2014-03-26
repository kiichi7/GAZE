var m1 : Material;
var m2 : Material;
var m3 : Material;
var m4 : Material;
var mySkybox : Skybox;
private var chooseNumber : int;
private var leftOrRight : boolean;

function Start () {

	transform.Rotate(Vector3.up, Random.Range(0,360), Space.World);
	
	chooseNumber = Random.Range(0,4);
	switch(chooseNumber){
		case 0: mySkybox.material = m1; break;
		case 1: mySkybox.material = m2; break;
		case 2: mySkybox.material = m3; break;
		default: mySkybox.material = m4;
	}
	
	if (Random.Range(0,2) == 0) leftOrRight = true;
	else leftOrRight = false;
	
}

function Update () {
	
	if (leftOrRight) transform.Rotate(Vector3.up, Time.deltaTime * 2, Space.World);
	else transform.Rotate(Vector3.up, - Time.deltaTime * 2, Space.World);
	if(Input.GetKeyDown(KeyCode.Escape)) Application.Quit();
	if(Input.GetKeyDown(KeyCode.G)) Application.LoadLevel("G");
	if(Input.GetKeyDown(KeyCode.A)) Application.LoadLevel("A");
	if(Input.GetKeyDown(KeyCode.Z)) Application.LoadLevel("Z");
	if(Input.GetKeyDown(KeyCode.E)) Application.LoadLevel("E");
}