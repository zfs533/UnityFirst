using UnityEngine;
using System.Collections;

public class ControlGui : MonoBehaviour 
{
	void Start () {
	
	}

	void Update () {
	
	}

	public void OnGUI()
	{
		if (GUILayout.Button ("C#调用JavaScript")) 
		{
			//ControlGui_JS jsScript = (ControlGui)GetComponent("ControlGui_JS");
			//jsScript.callMe("我来自C#");
		}
	}

	public void callMe(string test)
	{
		print (test);
	}
}
