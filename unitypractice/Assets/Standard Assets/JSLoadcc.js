#pragma strict

function Start () {
	var cs = gameObject.GetComponent("ScaleCC");
	//cs.callMe("我来自JAVASCRIPT");
}

function Update () {

}

function callMe()
{
	print("我来自c#");
}