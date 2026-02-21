const ErrorState = ({ message, onRetry }) => {
  return (
    <div className='error-state'>
      <h3>Oops! Something went wrong!</h3>
      <p>{message}</p>
      <button className='btn-primary' onClick={onRetry}>
        Try again
      </button>
    </div>
  );
};
export default ErrorState;
