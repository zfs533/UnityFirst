#pragma strict

function Start () {

}

function OnGUI()
{
	GUI.Label(Rect(0, 0, 100, 30), "我是文本");
	
	if ( GUI.Button (Rect (100, 100, 120, 50), "Start Game") ) 
	{
		//Application.LoadLevel("scene01");
		Application.LoadLevel(02);
	}

	if ( GUI.Button(Rect(100, 200, 120, 50), "Stop Game") )
	{
		Application.Quit();
	}
}

function Update () {

}

