#pragma strict
/*
private var isOpen : boolean = false;
private var openingTime : float = 0;
private var currentDoor : GameObject;
public var openedTime : float = 3;
public var openSound : AudioClip;
public var closeSound : AudioClip;

//角色控制器碰撞检测函数
/*
public function OnControllerColliderHit(hit:ControllerColliderHit)
{
	if ( hit.gameObject.tag == "playerDoor" && !isOpen )
	{
		openDoor(hit.gameObject);
		currentDoor = hit.gameObject;
	}
}
*/

private var powerNum : float = 0;
private var tip		 : String = "当收集到4个能量源时才能进入小屋";
public var powerImgArr : Texture2D[];
public var currentTexture : Texture;
public static var textureCount : float = 0;

function Start () 
{
	currentTexture = powerImgArr[0];
} 

function Update () 
{
	if ( powerNum == 4 )
	{
		tip = "能量源以收集齐全,请进入小屋";
	}
}

//触发器碰撞检测函数
public function OnTriggerEnter(col:Collider)
{
	if ( col.gameObject.tag == "playerDoor" )
	{
		if ( powerNum == 4 )
		{
			//访问名字为door物体上脚本中的openDoor函数
			gameObject.Find("door").SendMessage("openDoor");
		}
	}
	if ( col.gameObject.tag == "power0" )
	{
		//访问标签名为power物体上脚本中的distroyObject函数
		gameObject.FindWithTag("power0").SendMessage("distroyObject");
		powerNum++;
	}
}

public function OnGUI()
{
	//GUI.color = Color.green;
	GUILayout.BeginVertical();
	GUILayout.Label("已收集到能量源" + powerNum + "个");
	GUILayout.Space(10);
	GUILayout.Label(tip);
	GUILayout.EndVertical();	
	
	GUI.DrawTexture(Rect(0, Screen.height - currentTexture.height, currentTexture.width, currentTexture.height),currentTexture);
}




/*
if ( isOpen )
	{
		openingTime += Time.deltaTime;
		if ( openingTime > openedTime )
		{
			openingTime = 0;
			closeDoor(currentDoor);
		}
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
*/















