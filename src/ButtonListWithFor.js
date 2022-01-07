import Button from "./Button";

const btnText = "Click Me!";

const Buttonlist = () => {
	let listArray = [];
	for (let i = 0; i < 10; i++) {
		listArray.push(<Button text={btnText} key={i} />);
	}
	return <div>{listArray}</div>;
};

export default Buttonlist;
