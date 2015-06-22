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
	//电池[更换物体普通材质]
	gameObject.FindWithTag("player").GetComponent(PlayerCollision).currentTexture = gameObject.FindWithTag("player").GetComponent(PlayerCollision).powerImgArr[PlayerCollision.textureCount];
	//能量源屋更换纹理[更换物体的主材质]
	gameObject.FindWithTag("player").GetComponent(PlayerCollision).houseRender.material.mainTexture = gameObject.FindWithTag("player").GetComponent(PlayerCollision).houseImgArr[PlayerCollision.textureCount];
	//播放音乐
	AudioSource.PlayClipAtPoint(sound, transform.position);
	print("textureCount= "+PlayerCollision.textureCount);
	Destroy(gameObject);
}

