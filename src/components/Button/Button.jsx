import PropTypes from 'prop-types';

import './Button.css'

const Button = ({ onBtnClick }) => (
  <button type="button" className="Button" onClick={onBtnClick}>
    Load more...
  </button>
);
export default Button;

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
