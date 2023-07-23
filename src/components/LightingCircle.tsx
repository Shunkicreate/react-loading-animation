import "./LightingCircle.css";
type Props = {
    color: string;
    size: number;
};

const LightingCircle = (props:Props) => {
    const { color, size } = props;
	return (
        /*boxShadow: offset-x | offset-y | blur-radius | spread-radius | color */
        <div className="LightCircle" style={{backgroundColor:color, width:size, height:size, boxShadow: `0rem 0rem ${size/16}rem ${size/16}rem ${color}`}}>
        </div>
	);
};

export default LightingCircle;