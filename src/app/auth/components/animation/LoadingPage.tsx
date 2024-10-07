import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function LoadingPage() {
  return (
    <div className="z-50 rounded-3xl h-full w-full bg-white opacity-50 flex justify-center items-center">
      <FontAwesomeIcon className='size-14' icon={faSpinner} spinPulse style={{color: "#B197FC",}} />
    </div>  
  );
}

