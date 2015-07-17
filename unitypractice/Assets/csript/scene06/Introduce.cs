using UnityEngine;
using System.Collections;

public class Introduce : MonoBehaviour 
{
	private string gameScene = "02";
	public Texture2D ico;
	private bool isPlay = false;
	private bool isInstructions = false;
	private bool isQuit = false;
	private bool isInstruction = false;
	private bool isBack = false;
	private int  gap = 20;

	private GameObject instructionCarmera;
	private string intruduce;

	public GUISkin mySkins;
	public GUIStyle testSkin;
	public GUIStyle playSkin;
	public GUIStyle instructionSkin;
	public GUIStyle quitSkin;
	private bool isEscape = false;

	void Start () 
	{
		instructionCarmera = GameObject.Find ("Camera");
		instructionCarmera.camera.depth = -2;
		testSkin = mySkins.customStyles[0];
		playSkin = mySkins.customStyles[1];
		instructionSkin = mySkins.customStyles[2];
		quitSkin = mySkins.customStyles[3];
		intruduce = "小岛求生游戏介绍：\n1.收集四个以上能量源；\n2.进入小屋拾取火柴盒；\n3.打靶获得1000以上积分；\n4.点燃火堆。";
	}
	
	// Update is called once per frame
	void Update () 
	{
		if ( isPlay )
		{
			Application.LoadLevel (gameScene);
		}
		if ( isInstructions )
		{
			instructionCarmera.camera.depth = 0;
			isInstruction = true;
		}
		if ( isQuit )
		{
			Application.Quit();
		}
		if ( isBack )
		{
			isInstruction = false;
			instructionCarmera.camera.depth = -2;
		}
		if (Input.GetKeyDown (KeyCode.Escape) && !isEscape) 
		{
			GUI.Window(0, new Rect(Screen.width/2, Screen.height/2, 300,400),windowContent,"mywindow");
			isEscape = true;
		}
	}
	public void OnGUI()
	{
		if( !isInstruction )
		{
			GUI.DrawTexture(new Rect(Screen.width/2-ico.width/2,0,ico.width, ico.height), ico);
			isPlay = GUI.Button(new Rect(Screen.width/2-512/2,ico.height + gap,512, 64),"",playSkin);
			isInstructions = GUI.Button(new Rect(Screen.width/2-512/2,ico.height+64+gap*2,512, 64), "",instructionSkin);
			isQuit = GUI.Button(new Rect(Screen.width/2-512/2,ico.height+64+64+gap*3,512, 64), "",quitSkin);
		}
		else
		{
			isBack = GUI.Button(new Rect(Screen.width-200,Screen.height-300,100, 50),"还回");
			GUI.Label(new Rect(Screen.width/2-intruduce.Length,Screen.height/2-150,Screen.width, Screen.height), intruduce, testSkin);
		}

	}
    void windowContent(int windowID)
	{
		GUILayout.BeginHorizontal ();
		GUILayout.Space (50);
		GUILayout.BeginVertical ();
		GUILayout.Button ("继续游戏", GUILayout.Width (200));
		GUILayout.Button ("继续游戏", GUILayout.Width (200));
		GUILayout.Button ("继续游戏", GUILayout.Width (200));
		GUILayout.Button ("继续游戏", GUILayout.Width (200));
		GUILayout.EndVertical ();
		GUILayout.EndHorizontal ();
	}
}





