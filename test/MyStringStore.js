const MyStringStore = artifacts.require("./MyStringStore.sol");

contract("MyStringStore", accounts => {
	it("should store the string 'Hey There!'", async () => {
		const myStringStore = await MyStringStore.deployed();
		await myStringStore.set("Hey There!", { from: accounts[0] });
		const storedString = await myStringStore.myString.call();
		assert.equal(storedString, "Hey There!", "The string was not store");
	});
});