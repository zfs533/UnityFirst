#pragma strict

function Start () {

}

function Update () 
{
	//当炮弹位于地面以下【地面高度在50米】
	if ( gameObject)
	{
		if ( gameObject.transform.position.y < 40 )
		{
			if ( gameObject)
			{
				//销毁炮弹
				Destroy(gameObject);
				var bulletNum : float = gameObject.Find("Main Camera").GetComponent(Shooting).bulletNum;
				if ( gameObject.tag != "bullet" )
				{
					//gameObject.Find("Main Camera").GetComponent(Shooting).score += 100;
					//使用静态变量访问变量
					Shooting.score += 100;
				}
			}
		}
	}
}