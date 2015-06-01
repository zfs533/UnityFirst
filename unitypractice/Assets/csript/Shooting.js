﻿#pragma strict
public var speed : int = 5;
public var bullet : Transform;
public var score : int = 0;//得分
public var bulletNum : int = 0;//炮弹数量
function Start () 
{
	gameObject.Find("score").GetComponent(GUIText).text = "the bullet number:"+bulletNum.ToString()+"  current score:"+score.ToString();
}

function Update () 
{
	//横轴
	var horizontal : float = Input.GetAxis("Horizontal")*Time.deltaTime*speed;
	//纵轴
	var vertical : float = Input.GetAxis("Vertical")*Time.deltaTime*speed;
	transform.Translate(horizontal, 0, vertical);
	print(horizontal);
	//发射炮弹
	if ( Input.GetButtonDown("Fire1") )
	{
		//实例化子弹
		var bullets : Transform = Instantiate(bullet, transform.position, transform.rotation);
		//发射方向[正前方,z轴]
		var direction : Vector3 = transform.TransformDirection(Vector3.forward);
		//给子弹一个重力[使其发射时射出]【相当于发射速度】
		bullets.rigidbody.AddForce(direction*4000);
		bulletNum++;
		//访问GUI.Text组件
		gameObject.Find("score").GetComponent(GUIText).text = "the bullet number:"+bulletNum.ToString()+"  current score:"+score.ToString();
	}
	//镜头向左旋转
	if ( Input.GetKey(KeyCode.Q) )
	{
		var sp1 : float = -25 * Time.deltaTime;
		transform.Rotate(0, sp1, 0);
	}
	//镜头向右旋转
	if ( Input.GetKey(KeyCode.E) )
	{
		var sp2 : float = 25 * Time.deltaTime;
		transform.Rotate(0, sp2, 0);
	}
	//镜头向上旋转
	if ( Input.GetKey(KeyCode.Z) )
	{
		var sp3 : float = 25 * Time.deltaTime;
		transform.Rotate(sp3, 0, 0);
	}
	//镜头向下旋转
	if ( Input.GetKey(KeyCode.C) )
	{
		var sp4 : float = -25 * Time.deltaTime;
		transform.Rotate(sp4, 0, 0);
	}
	
}























