#pragma strict

function Start () {

}

function Update () 
{
	//当炮弹位于地面以下【地面高度在50米】
	if ( gameObject.transform.position.y < 40 )
	{
		//销毁炮弹
		Destroy(gameObject);
		var bulletNum : float = gameObject.Find("Main Camera").GetComponent(Shooting).bulletNum;
		print(bulletNum);
	}
}