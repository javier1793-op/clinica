import '../../Scss/alert.scss'

const Alert = ({ message}) => {
    return (
        <div className={`alert showAlert show`}>
          <span className="fas fa-exclamation-circle"></span>
          <span className="msg">{message}</span>
          <div className="close-btn">
            <span className="fas fa-times"></span>
          </div>
        </div>
      );
};

export default Alert;
