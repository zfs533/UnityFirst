using UnityEngine;
using System.Collections;

public class Shooting : MonoBehaviour {

	public float speed = 5.0F;
	// Use this for initialization
	public void Start () {
	
	}
	
	// Update is called once per frame
	public void Update () 
	{
		float horizontal = Input.GetAxis ("Horizontal") * Time.deltaTime * speed;
		float vertical = Input.GetAxis ("Vertical") * Time.deltaTime * speed;
		transform.Translate (horizontal, 0, vertical);
		print (horizontal);
	}
}
