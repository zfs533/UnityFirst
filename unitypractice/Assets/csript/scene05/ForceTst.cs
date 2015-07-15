using UnityEngine;
using System.Collections;

public class ForceTst : MonoBehaviour 
{
	public GameObject bullet;
	private GameObject bt;
	private GameObject target;
	private GameObject carmera;
	public Texture texture;
	private string info;
	void Start () 
	{
		target = GameObject.Find ("Cube");
	}
	
	// Update is called once per frame
	void Update () 
	{
		if ( Input.GetButtonDown("Fire1") )
		{
			//bt = (GameObject)Instantiate(bullet, gameObject.transform.position, gameObject.transform.rotation);
			//方法一
			//Vector3 direction = gameObject.transform.TransformDirection(Vector3.forward);
			//bt.rigidbody.AddForce(direction*4000);
			//方法二
			//bt.rigidbody.velocity = transform.forward*50;
			//bt.name = "bullet";
			//施加位置力测试[目标位置-子弹位置]
			//Vector3 force = target.transform.position - bt.transform.position;
			//bt.rigidbody.AddForceAtPosition(force, bt.transform.position, ForceMode.Impulse);
		}
		Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		RaycastHit hit;
		if ( Physics.Raycast(ray, out hit) )
		{
			info = "打中靶心";
		}
		else
		{
			info = "未打中靶心";
		}
	}
	public void OnGUI()
	{
		Rect rect = new Rect(Input.mousePosition.x - (texture.width>>1),Screen.height - Input.mousePosition.y-(texture.height>>1),texture.width,texture.height);
		GUI.DrawTexture(rect,texture);
		GUI.Label(new Rect(300,300,300,300), info);
	}
}











