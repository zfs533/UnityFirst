#pragma strict

function Start () 
{
	
}

function Update () 
{
}

public function OnGUI()
{
	if ( GUILayout.Button("添加旋转脚本组件", GUILayout.Width(150), GUILayout.Height(40) ) )
	{
		addScript();
	}
	if ( GUILayout.Button("删除旋转脚本组件",GUILayout.Width(150), GUILayout.Height(40) ) )
	{
		deleteScript();
	}
	if ( GUILayout.Button("创建一个立方体",GUILayout.Width(150), GUILayout.Height(40) ) )
	{
		createCube();
	}
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

private function addScript()
{
	gameObject.Find("Cube").AddComponent("RotateJS");
}

private function deleteScript()
{
	var sc : Object = gameObject.Find("Cube").GetComponent("RotateJS");
	Destroy(sc);
}

private function createCube()
{
	var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	cube.AddComponent(Rigidbody);
	cube.name = "sccube";
	cube.renderer.material.color = Color.red;
	cube.transform.position = new Vector3(0, 1, 0);
}














