#pragma strict

public var launchSound : AudioClip;
public var coconut : Rigidbody;

function Start () 
{
}

function Update () 
{
	if ( Input.GetButtonDown("Fire1") )
	{
		transform.parent.audio.PlayOneShot(launchSound);
		var coco : Rigidbody = Instantiate(coconut, transform.parent.position, transform.rotation);
		//var direction : Vector3 = transform.TransformDirection(Vector3.forward);
		//coco.rigidbody.AddForce(direction*4000);
		coco.velocity = transform.forward*30;
		coco.name = "coconut";
		//图略两个物体之间的碰撞
		//Rigidbody.IgnoreCollision(transform.root.collider, coco.collider, true);
	}
}