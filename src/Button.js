const Button = (props) => {
	//console.log(props);

	const { buttonText, onClick } = props;

	return <button onClick={onClick}>{buttonText}</button>;
};

export default Button;
