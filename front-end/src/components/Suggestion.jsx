import photo from "../assets/img/IMG_20220119_133444.jpg";

const Radar = () => {
  return (
    <div className="bg-[#F5F6F7] h-screen flex justify-center">
      <div className="bg-white  h-[80%] w-[70%] flex justify-around items-center rounded-3xl mt-24 p-8">
        <div className="cadre_suggestion">
          <img src={photo} alt="suggestion" />
        </div>
        <div className="cadre_suggestion text_suggestion">
          <div className="bg-[#F5F6F7] h-screen flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Radar;
