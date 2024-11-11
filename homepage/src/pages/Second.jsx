import SecondContent from '../components/SecondContent';
import testImage from '../assets/firstpage/image.png';

const Second = () => {
  return (
    <div className="bg-[#FF8224] w-full h-full min-h-screen">
      <SecondContent image={testImage} />
    </div>
  );
};

export default Second;
