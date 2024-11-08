import MainImage from '../assets/firstpage/image.png';
import GoogleBtnIcon from '../assets/firstpage/GoogleStoreIcon.png';
import AppStoreBtn from '../assets/firstpage/AppStoreIcon.png';
import Button from './Button';
import Circle from '../assets/firstpage/Circle.png'; // 동그라미 이미지
import Wavve from '../assets/firstpage/Wave.png'; // 물결 이미지

const MainIntro = () => {
  return (
    <div className="w-full h-full flex text-black">
      <div className="w-1/2 flex flex-col justify-center items-start">
        <div className="mb-4">탁주부터 전통소주까지</div>

        <div className="flex text-7xl font-jua font-bold text-black mb-1 relative">
          <div className="mr-3 relative z-10">
            전통주
            <img
              src={Wavve}
              alt="Wave"
              className="absolute top-0 left-[-10px] w-30 h-6 mt-12 ml-3 z-[-100]"
            />
          </div>
          <div className="relative z-10">
            한 잔
            <img
              src={Circle}
              alt="Circle"
              className="absolute top-0 left-2 w-40 h-20 -mt-2 -ml-2 z-[-100]"
            />
          </div>
        </div>

        <div className="text-7xl font-jua font-bold text-black mb-4">
          생각 날 때
        </div>
        <div className="text-xl mb-4">누림에서 가장 가까운 전통주점을</div>
        <div className="text-xl">찾을 수 있어요.</div>

        <div className="flex space-x-4 mt-4">
          <Button
            icons={GoogleBtnIcon}
            text="Google Store"
            link="/"
            color="bg-[#FF8224]"
            width="w-35"
            height="h-12"
          />
          <Button
            icons={AppStoreBtn}
            text="App Store"
            link="/"
            color="bg-[#FF8224]"
            width="w-35"
            height="h-12"
          />
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <img
          src={MainImage}
          alt="Main"
          className="w-485 h-485 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default MainIntro;
