#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter()
{
	gameObject.Find("dLight").GetComponent(Light).enabled = true;
}