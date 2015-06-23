#pragma strict

public var launchSound : AudioClip;
public var coconut : Rigidbody;
public var isLaunch : boolean = false;
private var launchTip : String = "";
private var tipTime : float = 0;
private var isAliveLauncher : boolean = false;
private var targetDownCount : int = 0;
private var isWon : boolean = false;
public var cellPrefab : GameObject;
public var wonSound : AudioClip;
private var myScore : int = 0;
public var scoreSring : String = "得分：0";
public var isShowScore : boolean = false;

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
		}
		else
		{
			//提示信息
			launchTip = "请站在小屋前面的垫子上启动发射器";
		}
	}
	if ( isAliveLauncher && isWon == false )
	{
		//提示信息
		launchTip = "\n发射器以激活\n1.鼠标点击发射椰子炮弹,\n2.同一段时间内打到三个靶子获胜";
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
	//靶子起来时间减短
	if ( targetDownCount == 3 )
	{
		Target.ressetTime -= 0.2;
		if ( Target.ressetTime < 0.5 )
		{
			Target.ressetTime = 0.5;
		}
		myScore += 100;
		scoreSring = "得分：" + myScore.ToString()+"  "+"靶子恢复时间："+Target.ressetTime.ToString();
	}
}

function targetDownCountCut()
{
	targetDownCount--;
}

function jugementShootingWin()
{
	//收集能量源
	if ( targetDownCount == 3 && isWon == false )
	{
		transform.parent.audio.PlayOneShot(wonSound);
		var power : GameObject = gameObject.Find("coconutShy/powerCell").gameObject;
		power.transform.Translate(-1, 0, -2);
		//Instantiate(cellPrefab, power.transform.position, power.transform.rotation);
		//Destroy(power);
		isWon = true;
	}
}

function OnGUI()
{
	//只管当前OnGUI函数中的GUI组件
	GUI.color = Color.red;
	GUILayout.Space(0);
	GUILayout.BeginHorizontal();
	GUILayout.Space(Screen.width/2);
	GUILayout.Label(launchTip);
	GUILayout.EndHorizontal();
	if ( isShowScore )
	{
		GUI.Label(Rect(Screen.width - 200, 0, 200, 50), scoreSring);
	}
}











