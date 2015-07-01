#pragma strict
public var fire : GameObject;
public var smonk : GameObject;
function Start () {
//fire = gameObject.Find("fireParticle");
//	smonk = gameObject.Find("smokeParticle");
}

function Update () {

}
//OnTriggerEnter
public function OnTriggerEnter(col : Collider)
{
	if ( col.gameObject.tag == "player" )
	{
		fire.active = true;
		smonk.active = true;
		col.gameObject.SendMessage("setMatchedBox");
		Destroy(gameObject);
	}
}