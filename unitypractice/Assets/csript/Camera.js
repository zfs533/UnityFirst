#pragma strict

var speed : float;
var rotationSpeed : float;

function Start () 
{
	speed = 10.0;
	rotationSpeed = 100.0;
}

function Update () 
{
	/*
	var translation : float = Input.GetAxis("Vertical")*speed;
	var rotation : float = Input.GetAxis("Horizontal")*rotationSpeed;
	translation *= Time.deltaTime;
	rotation *= Time.deltaTime;
	transform.Translate(0, 0, translation);//沿着Z轴平移对象，（前后）
	transform.Rotate(0, rotation, 0);//以Y轴为中心,左右旋转
	*/
	//向前平移
	if ( Input.GetKey(KeyCode.W) )
	{
		var sp : float = 30 * Time.deltaTime;
		transform.Translate(0, 0, sp);
	}
	//向后平移
	if ( Input.GetKey(KeyCode.S) )
	{
		var sp1 :float = -30 * Time.deltaTime;
		transform.Translate(0, 0, sp1);
	}//向上平移
	if ( Input.GetKey(KeyCode.Q) )
	{
		var sp4 :float = -25 * Time.deltaTime;
		transform.Translate(0, sp4, 0);
	}
	//向下平移
	if ( Input.GetKey(KeyCode.E) )
	{
		var sp5 : float = 25 * Time.deltaTime;
		transform.Translate(0, sp5, 0);
	}
	//向左旋转
	if ( Input.GetKey(KeyCode.A) )
	{
		var sp2 :float = -30 * Time.deltaTime;
		transform.Rotate(0, sp2, 0);
	}
	//向右平移
	if ( Input.GetKey(KeyCode.D) )
	{
		var sp3 : float = 30 * Time.deltaTime;
		transform.Rotate(0, sp3, 0);
	}
	//向上旋转
	if ( Input.GetKey(KeyCode.Z) )
	{
		var sp6 : float = 30 * Time.deltaTime;
		transform.Rotate(sp6, 0, 0);
	}
	//向下旋转 
	if ( Input.GetKey(KeyCode.C) )
	{
		var sp7 : float = -30 * Time.deltaTime;
		transform.Rotate(sp7, 0, 0);
	}
}



















