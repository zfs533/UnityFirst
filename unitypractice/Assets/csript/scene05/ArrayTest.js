#pragma strict

private var obj0 : GameObject;
private var obj1 : GameObject;
private var obj2 : GameObject;
private var arr  : Array = new Array();

function Start () 
{
	obj0 = GameObject.FindWithTag("player");
	obj1 = GameObject.FindWithTag("mat");
	obj2 = GameObject.FindWithTag("bullet");
	arr.push(obj0);
	arr.push(obj1);
	arr.push(obj2);
}

function Update () {}

public function OnControllerColliderHit(hit : ControllerColliderHit)
{
	if ( hit.gameObject.tag == "player" )
	{
		for ( var mm : GameObject in arr )
		{
			mm.renderer.material.color = Color.blue;
		}
	}
	if ( hit.gameObject.tag == "mat" )
	{
		for ( var mm : GameObject in arr )
		{
			mm.renderer.material.color = Color.red;
		}
	}
	if ( hit.gameObject.tag == "bullet" )
	{
		for ( var mm : GameObject in arr )
		{
			mm.renderer.material.color = Color.yellow;
		}
	}
}


































