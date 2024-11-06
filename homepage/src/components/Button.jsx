const Button = ({
  icons,
  text,
  link,
  color = 'bg-gray-100',
  width = 'auto',
  height = 'auto',
}) => {
  return (
    <a
      href={link}
      className={`flex items-center space-x-2 px-4 py-2 border rounded-lg ${color} ${width} ${height} text-white`}
    >
      {icons && <img src={icons} alt={text} className="w-6 h-6" />}
      <span>{text}</span>
    </a>
  );
};

export default Button;
