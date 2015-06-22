#pragma strict
//背景纹理
private var background : Texture2D;
//商标
private var logo 	   : Texture2D;
private var logoWidth  : int = 300;
private var logoHeight : int = 250;
//动画数组
private var animArr	   : Object[];
private var x		   : int;
private var y 		   : int;
//帧序列
private var nowFrame   : int = 0;
//动画帧总数
private var allFrame   : int;
//帧频
private var frameRate  : float = 10;
//限制帧的时间
private var time 	   : float = 0;

function Start () 
{
	background = Resources.Load("mainback");
	logo	   = Resources.Load("logo");
	animArr    = Resources.LoadAll("anima");
	x		   = Screen.width;
	y 		   = Screen.height/2;
	allFrame   = animArr.Length;
}

function Update () {

}

public function OnGUI()
{
	//背景
	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), background, ScaleMode.StretchToFill, true, 0);
	//商标
	GUI.DrawTexture(Rect(Screen.width-(logoWidth+100) >> 1, 0, logoWidth, logoHeight), logo, ScaleMode.StretchToFill, true, 0);
	
	if ( GUI.Button(Rect(Screen.width - 100 >> 1, logoHeight, 100, 30), "开始游戏") )
	{
		startGame();
	}
	if ( GUI.Button(Rect(Screen.width - 100 >> 1, logoHeight + 40, 100, 30), "读取进度") )
	{
		getSchedule();
	}
	if ( GUI.Button(Rect(Screen.width - 100 >> 1, logoHeight + 80, 100, 30), "关于游戏") )
	{
		gameAbount();
	}
	if ( GUI.Button(Rect(Screen.width - 100 >> 1, logoHeight + 120, 100, 30), "退出游戏") )
	{
		quitGame();
	}
	//绘制帧动画
	drawAnimation(animArr, Rect(x, y, 100, 100));
	x -= 2;
	if ( x < -120 )
	{
		x = Screen.width;
	}
}

private function startGame()
{
	Application.LoadLevel(01);
}

private function getSchedule()
{
	
}
private function gameAbount()
{

}
private function quitGame()
{
	Application.Quit();
}

//绘制帧动画
private function drawAnimation(tex:Object[], rect : Rect)
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







