using UnityEngine;
using System.Collections;

public class CubeCC : MonoBehaviour {

	// Use this for initialization
	private float mm = 2.0f;
	void Start () {
		int dd = (int)mm;
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void callMe(string str)
	{
		print("I am Cube Script for C#");	
		print(str);
	}
}
