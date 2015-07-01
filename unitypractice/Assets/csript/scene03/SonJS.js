#pragma strict

function Start () {

}

function Update () {

}

public function setRenderColor()
{
	gameObject.renderer.material.color = Color.red;
	gameObject.SendMessageUpwards("createCube");
}