using UnityEngine;
using System.Collections;

public class PowerTest : MonoBehaviour {

	// Use this for initialization
	void Start () {
		gameObject.rigidbody.AddForce(0, 500, 0);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
