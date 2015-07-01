#pragma strict
public static var isGui : boolean = false;
function Start () {}
function Update () {}

public function showGui()
{
	isGui = true;
}

public function hidGui()
{
	isGui = false;
}

public function OnGUI()
{
	if ( isGui )
	{
		GUILayout.BeginVertical();
		GUILayout.Space(100);
		GUILayout.BeginHorizontal();
		GUILayout.Space(100);
		GUILayout.Button("小润么么哒");
		GUILayout.Space(100);
		GUILayout.Label("小优么么哒");
		GUILayout.EndHorizontal();
		GUILayout.EndVertical();
	}
}