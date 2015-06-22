using UnityEngine;
using System.Collections;
/*
public class Login : MonoBehaviour 
{
	//背景纹理
	public Texture2D background;
	//商标
	public Texture2D logo;
	private int logoWidth  = 300;
	private int logoHeight= 250;
	//动画数组
	private Object[] animArr;
	private int x;
	private int y;
	//帧序列
	private int nowFrame = 0;
	//动画帧总数
	private int allFrame;
	//帧频
	private float frameRate = 10;
	//限制帧的时间
	private float time = 0;
	// Use this for initialization
	void Start ()   
	{
		//background = Resources.Load("mainback");
		//logo	   = Resources.Load("logo");
		animArr    = Resources.LoadAll("anima");
		x		   = Screen.width;
		y 		   = Screen.height/2;
		allFrame   = animArr.Length;
	}
	public void OnGUI()
	{
		//背景
		GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), background, ScaleMode.StretchToFill, true, 0);
		//商标
		GUI.DrawTexture(new Rect(Screen.width-(logoWidth+100) >> 1, 0, logoWidth, logoHeight), logo, ScaleMode.StretchToFill, true, 0);
		
		if ( GUI.Button(new Rect(Screen.width - 100 >> 1, logoHeight, 100, 30), "游戏开始") )
		{
			startGame();
		}
		if ( GUI.Button(new Rect(Screen.width - 100 >> 1, logoHeight + 40, 100, 30), "读取进度") )
		{
			getSchedule();
		}
		if ( GUI.Button(new Rect(Screen.width - 100 >> 1, logoHeight + 80, 100, 30), "关于游戏") )
		{
			gameAbount();
		}
		if ( GUI.Button(new Rect(Screen.width - 100 >> 1, logoHeight + 120, 100, 30), "退出游戏") )
		{
			quitGame();
		}
		//绘制帧动画
		drawAnimation(animArr, new Rect(x, y, 100, 100));
		x -= 2;
		if ( x < -120 )
		{
			x = Screen.width;
		}
	}
	private void startGame()
	{
		Application.LoadLevel(01);
	}
	
	private void getSchedule()
	{
		
	}
	private void gameAbount()
	{
		
	}
	private void quitGame()
	{
		Application.Quit();
	}
	
	//绘制帧动画
	private void drawAnimation(Object[] tex , Rect rect)
	{
		//绘制当前帧
		GUI.DrawTexture(rect, tex[nowFrame], ScaleMode.StretchToFill, true, 0);
		GUI.DrawTexture(Rect(rect.x+100,rect.y+100, rect.width, rect.height), tex[nowFrame], ScaleMode.StretchToFill, true, 0);
		//计算限制帧时间
		time += Time.deltaTime;
		if ( time > 1 / frameRate )
		{
			nowFrame++;
			time = 0;
			//超过帧总数，从0开始计
			if ( nowFrame >= allFrame )
			{
				nowFrame = 0;
			}
		}
	}

}
*/





