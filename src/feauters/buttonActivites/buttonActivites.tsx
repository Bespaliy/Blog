import { ButtonWraper } from './buttonActivites.style';

interface ButtonActivitesProps {
	src?: string;
	Child?: JSX.Element;
	alt: string;
	count: number;
	handlerOnCLick?: () => void;
}

const ButtonActivites = ({ Child, src, alt, count, handlerOnCLick }: ButtonActivitesProps) => {
	return (
		<ButtonWraper className='btn btn-like' onClick={handlerOnCLick}>
			{Child ? Child : <img src={src} alt={alt} />}
			<p className='saves'>{count}</p>
		</ButtonWraper>
	)
}

export default ButtonActivites;