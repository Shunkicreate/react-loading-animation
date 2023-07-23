import "./RotateAnimation.css"

const RotateAnimation = ({children}: {children?:JSX.Element}) => {
    if(children === undefined) return (
		<div>
            <div className="spinner"><div className="innnerSpinner"></div></div>
		</div>
    )

	return (
		<div>
            <div className="spinner">{children}</div>
		</div>
	);
};

export default RotateAnimation;
