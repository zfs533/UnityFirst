#pragma strict
/*

*/
public var speed : float = 6;
public var jumpspeed : float = 8;
public var gravity : float = 20;
private var movedirection : Vector3 = Vector3.zero;
private var grounded : boolean = false;

function FixedUpdate()//引擎自带函数，每隔一段时间执行一次
{
	if ( grounded )
	{
		movedirection = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));//获取坐标轴
		movedirection = transform.TransformDirection(movedirection);
		movedirection *= speed;
		if ( Input.GetButton("Jump") )
		{
			movedirection.y = jumpspeed;
		}
	}
	movedirection.y -= gravity*Time.deltaTime;//给当前代码依附对象一个向下的重力
	var controller : CharacterController = GetComponent(CharacterController);//角色控制器
	//移动命令
	var flags = controller.Move(movedirection * Time.deltaTime);
	grounded = (flags & CollisionFlags.CollidedBelow ) != 0;//控制器底部发生碰撞
}

@script RequireComponent(CharacterController)


function Start () {

}

function Update () {

}