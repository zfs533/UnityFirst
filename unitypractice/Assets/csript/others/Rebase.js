#pragma strict

private var originMaterialColor : Color;
function Start () 
{
	originMaterialColor = gameObject.renderer.material.color;
}

function Update () {

}
//数据清零
public function OnMouseDown()
{
	gameObject.renderer.material.color = Color.red;
	gameObject.Find("launcher").GetComponent(Launch).myScore = 0;
	Target.ressetTime = 3.0;
}

public function OnMouseUp()
{
	gameObject.renderer.material.color = originMaterialColor;
}
