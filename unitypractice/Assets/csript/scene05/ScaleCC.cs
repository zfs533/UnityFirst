using UnityEngine;
using UnityEditor;
using System.Collections;
[AddComponentMenu("新的菜单栏/克隆选择的对象")]
public class ScaleCC : MonoBehaviour 
{
	private float scaleX = 1;
	private float scaleY = 1;
	private float scaleZ = 1;
	private GameObject cube;
	private Camera camera;
	void Start () 
	{
		cube = GameObject.Find("Cube");
		cube.AddComponent("CubeCC");
		camera = GameObject.Find("Main Camera").GetComponent<Camera>();
		CubeCC cubeCC= cube.GetComponent<CubeCC>();
		cubeCC.callMe("I am c# Script");
		//return setTimeTest();
		test();
	}
	public IEnumerator setTimeTest()
	{
		print ("开始等待："+Time.time);
		yield return new WaitForSeconds(3);
		print ("结束等待："+Time.time);
	}

	void Update () {
	
	}
	public void OnGUI()
	{
		GUI.color = Color.red;
		GUILayout.Label("X轴缩放");
		scaleX = GUILayout.HorizontalSlider(scaleX, 0.5f, 10.0f,GUILayout.Width(200));
		GUILayout.Label("Y轴缩放");
		scaleY = GUILayout.HorizontalSlider(scaleY,  0.5f, 10.0f,GUILayout.Width(200));
		GUILayout.Label("Z轴缩放");
		scaleZ = GUILayout.HorizontalSlider(scaleZ,  0.5f, 10.0f,GUILayout.Width(200));
		cube.transform.localScale = new Vector3(scaleX, scaleY, scaleZ);
		if ( GUILayout.Button("放射观察",GUILayout.Height(50)) )
		{
			camera.isOrthoGraphic = false;
		}
		if ( GUILayout.Button("垂直观察", GUILayout.Height(50)) )
		{
			camera.isOrthoGraphic = true;
		}
	}

	public void callMe(string str)
	{
		print(str);
	}

	private void test()
	{

	}
}


















