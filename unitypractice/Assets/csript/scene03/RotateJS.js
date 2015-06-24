#pragma strict

function Start () {

}

function Update () {
	transform.Rotate(Vector3(0, 100*Time.deltaTime, 0));
}