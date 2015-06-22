#pragma strict

//public var doorLight : Light;
public var doorLight : GameObject;
function Start () 
{
}

function Update () {}

//触发碰撞检测
public function OnTriggerEnter(col:Collider)
{
	if ( col.gameObject.tag == "player" )
	{
		//如果收集满能量源，让门灯变绿色，表示可以进入小屋
		if ( PlayerCollision.textureCount == 4 )
		{
				gameObject.Find("doorLight").GetComponent(Light).color = Color.green;
				gameObject.Find("doorLight").GetComponent(Light).range = 20;
			
		}
	}
}