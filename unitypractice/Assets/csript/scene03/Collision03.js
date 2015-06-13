#pragma strict

function Start () {}

//角色碰撞器碰撞检测函数
public function OnControllerColliderHit(hit : ControllerColliderHit)
{
	/*
	if ( hit.gameObject.tag == "score" )
	{
		print("score");
		hit.gameObject.transform.Translate(0, 1, 0);
	}
	if ( hit.gameObject.tag == "player" )
	{
		hit.gameObject.transform.Rotate(0, 30, 0);
		print("player");
	}
	if ( hit.gameObject.tag == "playerDoor" )
	{
		hit.gameObject.transform.Translate(0, 2, 0);
		print("playerDoor");
	}
	*/
}

//触发器碰撞检测函数
public function OnTriggerEnter(hit : Collider)
{
	/*
	if ( hit.gameObject.tag == "score" )
	{
		print("score");
		hit.gameObject.transform.Translate(0, 1, 0);
	}
	if ( hit.gameObject.tag == "player" )
	{
		hit.gameObject.transform.Rotate(0, 30, 0);
		print("player");
	}
	if ( hit.gameObject.tag == "playerDoor" )
	{
		hit.gameObject.transform.Translate(0, 2, 0);
		print("playerDoor");
	}	
	*/
}

public function Update () 
{
	//光线投射碰撞检测
	/*
	var hit = RaycastHit;
	if ( Physics.Raycast(transform.position,Vector3.up,hit, 3) )
	{
		if ( hit.gameObject.tag == "score" )
		{
			print("score");
			hit.gameObject.transform.Translate(0, 1, 0);
		}
		if ( hit.gameObject.tag == "player" )
		{
			hit.gameObject.transform.Rotate(0, 30, 0);
			print("player");
		}
		if ( hit.gameObject.tag == "playerDoor" )
		{
			hit.gameObject.transform.Translate(0, 2, 0);
			print("playerDoor");
		}	
	}
	*/
}

//碰撞检测函数测试
public function OnCollisionEnter()
{
	gameObject.transform.Translate(0, 10, 0);
}









