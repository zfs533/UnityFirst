#pragma strict
private var centerObj : GameObject;
function Start () {
	centerObj = GameObject.Find("Capsule");
}

function Update () {
	//transform.Rotate(Vector3(0, 100*Time.deltaTime, 0));
	transform.RotateAround(centerObj.transform.position, Vector3.up, Time.deltaTime*50);
}