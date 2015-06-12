#pragma strict

private var isOpen : boolean = false;
private var openingTime : float = 0;
private var currentDoor : GameObject;
public var openedTime : float = 3;
public var openSound : AudioClip;
public var closeSound : AudioClip;

//角色控制器碰撞检测函数
public function OnControllerColliderHit(hit:ControllerColliderHit)
{
	if ( hit.gameObject.tag == "playerDoor" && !isOpen )
	{
		openDoor(hit.gameObject);
		currentDoor = hit.gameObject;
	}
}

//触发器碰撞检测函数
public function OnTriggerEnter(col:Collider)
{
/*
	if ( col.gameObject.tag == "player" )
	{
		transform.FindChild("door").SendMessage("openDoor");
	}
	else
	{
		print("zhou fang sheng");
		transform.FindChild("door").SendMessage("openDoor");
	}
	*/
}

function Update () 
{
	if ( isOpen )
	{
		openingTime += Time.deltaTime;
		if ( openingTime > openedTime )
		{
			openingTime = 0;
			closeDoor(currentDoor);
		}
	}
	//光线投射
	/*
	var hit = RaycastHit;
	if ( Physics.Raycast(transform.position,transform.forward,hit, 3) )
	{
		if ( hit.collider.gameObject.tag == "playerDoor" )
		{
			currentDoor = hit.collider.gameObject;
			currentDoor.SendMessage("openDoor");
		}
	}
	*/
}

//开门
public function openDoor(door:GameObject)
{
	isOpen = true;
	door.audio.PlayOneShot(openSound);
	door.transform.parent.animation.Play("doorOpen");
}

//关门
public function closeDoor (door:GameObject)
{
	isOpen = false;
	if ( door )
	{
		door.audio.PlayOneShot(closeSound);
		door.transform.parent.animation.Play("doorClose");
	}
}


function Start () {

}














