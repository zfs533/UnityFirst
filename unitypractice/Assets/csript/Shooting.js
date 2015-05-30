#pragma strict
public var speed : int = 5;
function Start () 
{

}

function Update () 
{
	var horizontal : float = Input.GetAxis("Horizontal")*Time.deltaTime*speed;
	var vertical : float = Input.GetAxis("Vertical")*Time.deltaTime*speed;
	transform.Translate(horizontal, 0, vertical);
	print(horizontal);
}