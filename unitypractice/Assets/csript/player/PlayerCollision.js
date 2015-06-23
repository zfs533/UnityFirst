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
//电池
public var powerImgArr : Texture2D[];
public var currentTexture : Texture;
public static var textureCount : float = 0;
//能量源屋
public var houseImgArr : Texture2D[];
public var houseRender : Renderer;
public var currentHouseTexture : Texture;
private var isCollisionPower : boolean = false;

//给玩家的提示信息
private var tipInfo : String= "";
private var isTip   : boolean = false;
private var tipTime : float = 0;
public  var lockedSounce : AudioClip;

function Start () 
{
	currentTexture = powerImgArr[textureCount];
	currentHouseTexture = houseImgArr[textureCount];
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
		//收集满能量源
		if ( powerNum == 4 )
		{
			//访问名字为door物体上脚本中的openDoor函数
			gameObject.Find("door").SendMessage("openDoor");
			tipInfo = "能量源充足可进入房间";
			isTip = true;
		}
		else//未收集满能量源,给玩家提示信息
		{
			AudioSource.PlayClipAtPoint(lockedSounce, transform.position);
			tipInfo = "能量源不足,还需"+(4-powerNum)+"才能进入房间";
			isTip = true;
		}
	}
	//收集能量源,与能量源发射碰撞
	if ( col.gameObject.tag == "power0" )
	{
		//访问标签名为power物体上脚本中的distroyObject函数
		gameObject.FindWithTag("power0").SendMessage("distroyObject");
		isCollisionPower = true;
		powerNum++;
	}
	//站在垫子上启动发射器
	if ( col.gameObject.tag == "mat" )
	{
		//访问其他物体上的JS脚本
		//gameObject.Find("launcher").GetComponent(Launch).isLaunch = true;
		//访问某对象上JS脚本的方法
		gameObject.Find("launcher").SendMessage("setLaunchTrue");
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
	if ( isCollisionPower )
	{
		//电池更换纹理
	    GUI.DrawTexture(Rect(0, Screen.height - currentTexture.height, currentTexture.width, currentTexture.height),currentTexture);
	}
	//提示信息
	showPlayerTip();
}
//玩家提示信息
public function showPlayerTip()
{
	if ( isTip )
	{
		tipTime += Time.deltaTime;
		if ( tipTime > 3 )
		{
			isTip = false;
			tipTime = 0;
		}
	}
	else 
	{
		tipInfo = "";
	}
	GUI.Label(Rect(Screen.width - tipInfo.Length*10 >> 1, Screen.height/2, Screen.width, Screen.height), tipInfo);
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















