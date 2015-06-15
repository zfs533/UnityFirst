#pragma strict

function Start () 
{
	
}

function Update () {

}

public function OnGUI()
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