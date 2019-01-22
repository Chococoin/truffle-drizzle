pragma solidity ^0.5.0;

contract MyStringStore {
	string public myString = "Hello World";

	function set(string memory _x) public {
		myString = _x;
	}
}