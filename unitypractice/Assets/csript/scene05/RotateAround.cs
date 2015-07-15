using UnityEngine;
using System.Collections;

public class RotateAround : MonoBehaviour {

	private GameObject sun;
	private GameObject earth;
	private GameObject yue;
	void Start () 
	{
		sun = GameObject.Find("sun");
		earth = GameObject.Find("earth");
		yue = GameObject.Find("yue");
	}
	
	// Update is called once per frame
	void Update () 
	{
		sun.transform.Rotate(0, 30*Time.deltaTime, 0);
		earth.transform.Rotate(0, 40*Time.deltaTime, 0);
		earth.transform.RotateAround(sun.transform.position, Vector3.up, 40*Time.deltaTime);
		yue.transform.Rotate(0, 0, 40*Time.deltaTime);
		yue.transform.RotateAround(earth.transform.position, Vector3.left, 40*Time.deltaTime);
	}
}

























