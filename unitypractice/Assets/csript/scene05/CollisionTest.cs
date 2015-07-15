using UnityEngine;
using System.Collections;

public class CollisionTest : MonoBehaviour 
{
	private CharacterController controller = null;
	private float speed = 30.0f;
	private float rotateSpeed = 3.0f;
	// Use this for initialization
	void Start () {
		controller = GetComponent<CharacterController>();
	}
	
	// Update is called once per frame
	void Update () 
	{

	}
	public void OnGUI()
	{
		return;
		if ( GUILayout.RepeatButton("向左旋转") )
		{
			transform.Rotate(0,-rotateSpeed,0);
		}
		if ( GUILayout.RepeatButton("向右旋转") )
		{
			transform.Rotate(0,rotateSpeed,0);
		}
		if ( GUILayout.RepeatButton("起飞") )
		{
			transform.Translate(0, 1, 0);
		}
		if ( GUILayout.RepeatButton("向前移动") )
		{
			controller.SimpleMove(Vector3.forward*speed);
		}
		if ( GUILayout.RepeatButton("向后移动") )
		{
			controller.SimpleMove(Vector3.forward*-speed);
		}
	}
	//角色碰撞器检查碰撞函数
	public void OnControllerColliderHit(ControllerColliderHit hit)
	{
		if ( controller.collisionFlags == CollisionFlags.Sides )
		{
			print(hit.gameObject.name);
		}
		//底部碰撞中
		if ( controller.collisionFlags == CollisionFlags.Below )
		{
			//print(hit.gameObject.name+"  zfsflash");
		}
	}
}












