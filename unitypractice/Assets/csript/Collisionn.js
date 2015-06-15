#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter()
{
	gameObject.Find("dLight").GetComponent(Light).enabled = false;
	var speedForward : float = 8;
	var v3 :Vector3 = Vector3(0,speedForward, 0);
	if ( rigidbody )
	{
		//刚体速率
		rigidbody.velocity = v3;
	}
}


public function OnMouseOver()
{
	renderer.material.color = Color.red;
}

public function OnMouseExit()
{
	renderer.material.color = Color.yellow;
}

public function OnMouseDown()
{
	//audio.Play();
}