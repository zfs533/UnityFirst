using UnityEngine;
using System.Collections;

public class JointTest : MonoBehaviour {

	public GameObject connectedObj = null;
	public Component jointComponent = null;
	void Start () 
	{
		connectedObj = GameObject.Find ("Capsule");
	}

	void OnGUI () 
	{
		if ( GUILayout.Button("添加链条关节") )
		{
			ResetJoint();
			jointComponent = gameObject.AddComponent("HingeJoint");
			HingeJoint hjoint = (HingeJoint)jointComponent;
			connectedObj.rigidbody.useGravity = true;
			hjoint.connectedBody = connectedObj.rigidbody;
		}
		if ( GUILayout.Button("添加固定关节") )
		{
			ResetJoint();
			jointComponent = gameObject.AddComponent("FixedJoint");
			FixedJoint fjoint = (FixedJoint)jointComponent;
			connectedObj.rigidbody.useGravity = true;
			fjoint.connectedBody = connectedObj.rigidbody;
		}
		if ( GUILayout.Button("添加弹簧关节") )
		{
			ResetJoint();
			jointComponent = gameObject.AddComponent("SpringJoint");
			SpringJoint sjoint = (SpringJoint)jointComponent;
			connectedObj.rigidbody.useGravity = true;
			sjoint.connectedBody = connectedObj.rigidbody;
		}
		if ( GUILayout.Button("添加角色关节") )
		{
			ResetJoint();
			jointComponent = gameObject.AddComponent("CharacterJoint");
			CharacterJoint cjoint = (CharacterJoint)jointComponent;
			connectedObj.rigidbody.useGravity = true;
			cjoint.connectedBody = connectedObj.rigidbody;
		}
		if ( GUILayout.Button("添加可配置关节") )
		{
			ResetJoint();
			jointComponent = gameObject.AddComponent("ConfigurableJoint");
			ConfigurableJoint gjoint = (ConfigurableJoint)jointComponent;
			connectedObj.rigidbody.useGravity = true;
			gjoint.connectedBody = connectedObj.rigidbody;

		}
	}
	void ResetJoint()
	{
		Destroy(jointComponent);
		this.transform.position = new Vector3(51.0f,20.0f,128.0f);
		connectedObj.gameObject.transform.position = new Vector3(59.0f,3.0f,128.0f);
		connectedObj.rigidbody.useGravity = false;
	}
}
