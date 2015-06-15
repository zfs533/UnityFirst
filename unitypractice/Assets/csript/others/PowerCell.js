#pragma strict

public var sound : AudioClip;
function Start () 
{
	
}

function Update () 
{
	transform.Rotate(0, 25*Time.deltaTime, 0);
}

public function distroyObject()
{
	PlayerCollision.textureCount++;
	gameObject.FindWithTag("player").GetComponent(PlayerCollision).currentTexture 
	= gameObject.FindWithTag("player").GetComponent(PlayerCollision).powerImgArr[PlayerCollision.textureCount];
	AudioSource.PlayClipAtPoint(sound, transform.position);
	print("textureCount= "+PlayerCollision.textureCount);
	Destroy(gameObject);
}