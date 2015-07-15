#pragma strict

function Start () 
{
	
}

function Update () {

}
//OnTriggerEnter
public function OnTriggerEnter(col : Collider)
{
	if ( col.gameObject.tag == "player" )
	{
		col.gameObject.SendMessage("setMatchedBox");
		Destroy(gameObject);
	}
}