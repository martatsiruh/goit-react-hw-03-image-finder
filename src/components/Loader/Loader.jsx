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