#pragma strict

private var isFireAndSmonk : boolean = false;
private var fire : GameObject;
private var smonk : GameObject;
function Start () 
{
print("firememedaxixixi");
	//fire = gameObject.Find("fireParticle");
	//smonk = gameObject.Find("smokeParticle");
}

function Update () {}

public function OnTriggerEnter(col : Collider)
{
	if ( col.gameObject.tag == "player" && !isFireAndSmonk )
	{
	/*
		var isMatched = col.gameObject.GetComponent("MatchBoxJS").isMatched;
		if ( isMatched )
		{
			isFireAndSmonk = true;
			fire.SetActive(true);
			smonk.active = true;
		}
		*/
	}
}