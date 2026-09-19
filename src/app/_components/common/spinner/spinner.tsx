interface ISpinnerProps {
  color?: string;
  size?: number;
  borderWidth?: number;
}

const Spinner: React.FC<ISpinnerProps> = ({
  color = '#3498db',
  borderWidth = 2,
  size = 20,
}) => {
  return (
    <div
      style={{
        border: `${borderWidth}px solid #f3f3f3`,
        borderTop: `${borderWidth}px solid ${color}`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={`animate-spin rounded-full`}
    ></div>
  );
};

export default Spinner;
