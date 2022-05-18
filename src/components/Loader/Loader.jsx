//import Loader from 'react-loader-spinner';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { MutatingDots } from 'react-loader-spinner'

const LoaderSpinner = () => (
  <div role="alert" className="loader">
    <MutatingDots 
      type="MutatingDots"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={2000}
    />
  </div>
);
export default LoaderSpinner;