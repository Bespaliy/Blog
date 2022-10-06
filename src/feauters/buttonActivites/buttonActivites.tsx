
interface ButtonActivitesProps {
	src?: string;
	Child?: JSX.Element;
	alt: string;
	count: number;
	handlerOnCLick?: () => void;
}

const ButtonActivites = ({ Child, src, alt, count, handlerOnCLick }: ButtonActivitesProps) => {
	return (
		<button className='btn btn-like' onClick={handlerOnCLick}>
			{Child ? Child : <img src={src} alt={alt} />}
			<p className='saves'>{count}</p>
		</button>
	)
}

export default ButtonActivites;