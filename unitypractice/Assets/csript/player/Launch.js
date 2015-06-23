#pragma strict

public var launchSound : AudioClip;
public var coconut : Rigidbody;
public var isLaunch : boolean = false;
private var launchTip : String = "";
private var tipTime : float = 0;
private var isAliveLauncher : boolean = false;
private var targetDownCount : int = 0;

function Start () {}

function Update () 
{
	if ( Input.GetButtonDown("Fire1") )
	{
		if ( isLaunch )
		{
			transform.parent.audio.PlayOneShot(launchSound);
			var coco : Rigidbody = Instantiate(coconut, transform.parent.position, transform.rotation);
			//var direction : Vector3 = transform.TransformDirection(Vector3.forward);
			//coco.rigidbody.AddForce(direction*4000);
			coco.velocity = transform.forward*30;
			coco.name = "coconut";
			//图略两个物体之间的碰撞
			//Rigidbody.IgnoreCollision(transform.root.collider, coco.collider, true);
			//收集能量源
			if ( targetDownCount === 3 )
			{
				
			}
		}
		else
		{
			launchTip = "请站在小屋前面的垫子上启动发射器";
		}
	}
	if ( isAliveLauncher )
	{
		launchTip = "发射器以激活";
		print(launchTip);
		isAliveLauncher = false;
	}
	if ( launchTip.Length > 1 )
	{
		tipTime += Time.deltaTime;
		if ( tipTime > 3 )
		{
			tipTime = 0;
			launchTip = "";
		}
	}
	
}

function setLaunchTrue()
{
	isLaunch = true;
	isAliveLauncher  = true;
}

function targetDownCountAdd()
{
	targetDownCount++;
}

function targetDownCountCut()
{
	targetDownCount--;
}

function OnGUI()
{
	//只管当前OnGUI函数中的GUI组件
	GUI.color = Color.red;
	GUILayout.Space(Screen.height/2);
	GUILayout.BeginHorizontal();
	GUILayout.Space(Screen.width/2);
	GUILayout.Label(launchTip);
	GUILayout.EndHorizontal();
}











