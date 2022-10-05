
interface ButtonActivitesProps {
	src: string;
	alt: string;
	count: number;
	handlerOnCLick?: () => void;
}

const ButtonActivites = ({ src, alt, count, handlerOnCLick }: ButtonActivitesProps) => {
	return (
		<button className='btn btn-like' onClick={handlerOnCLick}>
			<img src={src} alt={alt} />
			<p className='saves'>{count}</p>
		</button>
	)
}

export default ButtonActivites;