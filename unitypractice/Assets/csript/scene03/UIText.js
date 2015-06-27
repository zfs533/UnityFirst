#pragma strict
private var objs : GameObject[];
public var texture : Texture;
private var cloneObj : GameObject;
function Start () 
{
	//通过标签获取多个游戏对象
	objs = GameObject.FindGameObjectsWithTag ("bullet");
	objs[0].tag = "player";
	for ( var mm : GameObject in objs )
	{
		print(mm.tag + mm.name);
		//判断对象是否包含标签
		if ( mm.CompareTag("player") )
		{
			print("zhoufangsheng");
		}	
	}	
	cloneObj = GameObject.Find("Cube");
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
	gameObject.Find("Cube").renderer.material.mainTexture = texture;
	gameObject.Find("son").AddComponent("SonJS");
	gameObject.Find("son").AddComponent("RotateJS");
	//向子类发送消息
	gameObject.Find("Cube").BroadcastMessage("setRenderColor");
	//向父类发送消息
	gameObject.Find("son").SendMessageUpwards("createCube");
}

private function deleteScript()
{
	var sc : Object = gameObject.Find("Cube").GetComponent("RotateJS");
	Destroy(sc);
}

private function createCube()
{
/*
	var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	cube.AddComponent(Rigidbody);
	cube.name = "sccube";
	cube.renderer.material.color = Color.red;
	cube.transform.position = new Vector3(0, 1, 0);
*/
	var cube : GameObject = Instantiate(cloneObj, Vector3(0, 1, 0), cloneObj.transform.rotation);
	Destroy(cube, 2);
}














