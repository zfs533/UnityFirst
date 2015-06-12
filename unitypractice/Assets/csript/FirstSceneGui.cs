using UnityEngine;
using System.Collections;

public class FirstSceneGui : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void OnGUI()
	{
		if ( GUI.Button (new Rect (100, 100, 120, 50), "Start Game") ) 
		{
			Application.LoadLevel(01);
		}

		if ( GUI.Button (new Rect (100, 200, 120, 50), "Stop Game") ) 
		{
			Application.Quit();
		}
	}
}
