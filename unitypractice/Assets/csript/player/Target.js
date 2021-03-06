﻿#pragma strict

private var isCollision : boolean = false;
private var targetAnimation : Animation;
public var hitSounce : AudioClip;
public var ressetSounce : AudioClip;
public static var ressetTime : float = 3;
private var startTime : float = 0;

function Start () 
{
	targetAnimation = transform.parent.transform.parent.animation;
}

function Update () 
{
	if ( isCollision )
	{
		startTime += Time.deltaTime;
		if ( startTime > ressetTime )
		{
			isCollision = false;
			startTime = 0;
			targetAnimation.Play("targetUp");
			audio.PlayOneShot(ressetSounce);
		}
	}
}

//基本碰撞检测
public function OnCollisionEnter(theObject : Collision)
{
	if ( isCollision == false && theObject.gameObject.name == "coconut" )
	{
		//协同函数,引擎自带
		StartCoroutine("startHit");
		//startHit();
	}
}

public function startHit()
{
	audio.PlayOneShot(hitSounce);
	targetAnimation.Play("targetDown");
	isCollision = true;
	gameObject.Find("launcher").SendMessage("targetDownCountAdd");
	gameObject.Find("launcher").SendMessage("jugementShootingWin");
	//等待时间函数,引擎自带[延时]
	yield new WaitForSeconds(ressetTime);
	
	isCollision = false;
	startTime = 0;
	targetAnimation.Play("targetUp");
	audio.PlayOneShot(ressetSounce);
	gameObject.Find("launcher").SendMessage("targetDownCountCut");
	
}



















