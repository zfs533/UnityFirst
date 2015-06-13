#pragma strict

public var sound : AudioClip;
function Start () {}

function Update () 
{
	transform.Rotate(0, 25*Time.deltaTime, 0);
}

public function distroyObject()
{
	AudioSource.PlayClipAtPoint(sound, transform.position);
	Destroy(gameObject);
}