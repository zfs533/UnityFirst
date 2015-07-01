#pragma strict
function Start () {}
function Update () {}


public function callMe(test : String)
{
	print(test);
}

public function OnGUI()
{
	GUILayout.Space(50);
	if ( GUILayout.Button("JavaScript调用JavaScript") )
	{
		//gameObject.SendMessage("showGui");
		UIText.isGui = true;
	}
	
	
}