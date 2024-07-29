import CeoImage from "../../assets/ceo.png";

const CeoMessage = () => {
  return (
    <div>
      <div className="bg-blue-400 max-h-[900px] relative px-[50px]">
        <img src={CeoImage} className="w-[900px] h-[800px]" />
        <div className="absolute inset-0 bg-gray-800 opacity-60 rounded-bl-[400px] h-[95%]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[350px] font-extrabold text-blue-400 absolute top-[-0.1em] left-[1.7em]">
            CEO
          </h1>
          <div className="absolute top-[27em] left-[55em]">
            <h3 className="text-5xl font-bold text-white">MESSAGE</h3>
            <p className="text-white mt-8 w-[300px]">
              German-Gulf Enterprises Ltd is popularly known and referred to as
              bring the pioneers in th UAE to have first imported concrete
              pumps,plaster machines.
            </p>
            <p className="text-white mt-4 w-[300px] text-2xl">Ayman Ahmad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
