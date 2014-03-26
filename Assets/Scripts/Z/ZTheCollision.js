
var s5 : AudioClip;
var s6 : AudioClip;
var s11 : AudioClip;
var s12 : AudioClip;
var s13 : AudioClip;
var s15 : AudioClip;
var s16 : AudioClip;
var s21 : AudioClip;
var s22 : AudioClip;
var s23 : AudioClip;

private var soundChoose : int;



function Start () {

	hitNumber = Random.Range(1,11);

}

function OnCollisionEnter(theCollision : Collision){

	if (theCollision.gameObject.tag == "Eyeball") SoundPlay ();
	if (theCollision.gameObject.tag == "Groud") {
		SoundPlay ();
	}
}

function Update () {
	

	
}

function SoundPlay () {

	soundChoose = Random.Range(0,10);
	switch (soundChoose) {
	case 0: audio.clip = s5; break;
	case 1: audio.clip = s6; break;
	case 2: audio.clip = s11; break;
	case 3: audio.clip = s12; break;
	case 4: audio.clip = s13; break;
	case 5: audio.clip = s15; break;
	case 6: audio.clip = s16; break;
	case 7: audio.clip = s21; break;
	case 8: audio.clip = s22; break;
	case 9: audio.clip = s23; break;
	}
	audio.Play();

}
