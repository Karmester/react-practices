import Button from "./Button";

const ButtonlistWithMap = (_) => {
	const users = ["Richard", "Flora", "Aron", "Betti", "Johnny"];

	return (
		<div>
			{users.map((userName, i) => (
				<Button key={i} userName={userName} />
			))}
		</div>
	);

	// let listArray = [];
	// for (let i = 0; i < 10; i++) {
	//     listArray.push(<Button text={btnText} key={i} />)

	// }
	// return <div>{listArray}</div>;
};

export default ButtonlistWithMap;
