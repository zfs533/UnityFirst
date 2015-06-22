using UnityEngine;
using System.Collections;

public class RoleMove : MonoBehaviour 
{
	public Texture2D role;
	public Texture2D[] textureArr;
	private float time = 0;
	private int frameRate = 10;
	private int nowFrame = 0;
	private int allFrame;
	private float x = Screen.width/2;
	private float y = Screen.height/2;

	private bool isRight = false;
	private bool isLeft	 = false;
	private bool isFoward= false;
	private bool isBehand= false;
	private float speed = 3;

	private GameObject cube;

	public void Start () 
	{
		//textureArr = Resources.LoadAll(anima);
		cube = GameObject.Find("Cube");
		allFrame = textureArr.Length;
	}
	public void Update () 
	{
		
	}
	public void OnGUI()
	{
		createAnimation();

		addGui();

		moveAnimation();
	}

	private void addGui()
	{
		GUILayout.Space(100);
		GUILayout.BeginHorizontal();
		GUILayout.Space(200);
		isLeft = GUILayout.RepeatButton("left");
		GUILayout.Space(10);
		isRight = GUILayout.RepeatButton("right");
		GUILayout.EndHorizontal();
		GUILayout.Space(30);
		GUILayout.BeginHorizontal();
		GUILayout.Space(200);
		isFoward = GUILayout.RepeatButton("forward");
		GUILayout.Space(10);
		isBehand = GUILayout.RepeatButton("behand");
		GUILayout.EndHorizontal();
	}

	private void moveAnimation()
	{
		if ( isRight )
		{
			x += speed;
			cube.transform.Translate(speed*Time.deltaTime, 0, 0);
		}
		if ( isLeft )
		{
			x -= speed;
			cube.transform.Translate(-speed*Time.deltaTime, 0, 0);
		}
		if ( isFoward )
		{
			y += speed;
			cube.transform.Translate(0, speed*Time.deltaTime, 0);
		}
		if ( isBehand )
		{
			y -= speed;
			cube.transform.Translate(0, -speed*Time.deltaTime, 0);
		}
	}

	private void createAnimation()
	{
		//绘制纹理[不推荐]
		GUI.DrawTexture(new Rect(x, y, 100, 100), textureArr[nowFrame]);
		//动态更改物体主材质[推荐]
		cube.renderer.material.mainTexture = textureArr[nowFrame];

		time += Time.deltaTime;
		if ( time > 1 / frameRate )
		{
			time = 0;
			nowFrame++;
			if ( nowFrame >= allFrame )
			{
				nowFrame = 0;
			}
		}
	}
}









