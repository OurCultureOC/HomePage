import NurimLogo from '../assets/firstpage/Logo.png';
import MainIntro from '../components/MainIntro';

const First = () => {
  return (
    <div className="bg-[#FFECDF] w-full h-full min-h-screen">
      {/* 헤더의 배경색을 전체 너비로 채우기 */}
      <header className="bg-white w-full">
        <div className="p-5 flex items-center justify-between max-w-[50%] mx-auto">
          <img src={NurimLogo} alt="Nurim Logo" />

          <div className="flex space-x-[30px] text-black">
            <div>누림이란?</div>
            <div>앞으로의 누림</div>
            <div>이용약관</div>
          </div>
        </div>
      </header>

      <div className="w-[50%] h-[80vh] mx-auto my-8">
        <MainIntro />
      </div>
    </div>
  );
};

export default First;
