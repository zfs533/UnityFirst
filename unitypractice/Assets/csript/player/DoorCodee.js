#pragma strict

private var isOpen : boolean = false;
private var openingTime : float = 0;
private var currentDoor : GameObject;
public var openedTime : float = 3;
public var openSound : AudioClip;
public var closeSound : AudioClip;

//开门
public function openDoor()
{
	isOpen = true;
	audio.PlayOneShot(openSound);
	transform.parent.animation.Play("doorOpen");
}

//关门
public function closeDoor ()
{
	isOpen = false;
	audio.PlayOneShot(closeSound);
	transform.parent.animation.Play("doorClose");
}

public function Update () 
{
	if ( isOpen )
	{
		openingTime += Time.deltaTime;
		if ( openingTime > openedTime )
		{
			openingTime = 0;
			closeDoor();
		}
	}
}








