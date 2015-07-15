using UnityEngine;
using System.Collections;

public class ReaderArr : MonoBehaviour {

	//private Renderer[] render;
	private GameObject obj0;
	private GameObject obj1;
	private GameObject obj2;
	private ArrayList arr;

	void Start () {
		obj0 = GameObject.FindWithTag("player");
		obj1 = GameObject.FindWithTag("mat");
		obj2 = GameObject.FindWithTag("bullet");
		arr.Add(obj0);
		arr.Add(obj1);
		arr.Add(obj2);
	}

	// Update is called once per frame
	void Update () {
	
	}
	public void OnControllerColliderHit(ControllerColliderHit hit)
	{
		if ( hit.gameObject.tag == "player" )
		{
			hit.gameObject.renderer.material.color = Color.red;
		}
	}
}
