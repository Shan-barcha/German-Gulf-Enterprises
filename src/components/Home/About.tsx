import CompanyImage from "../../assets/company.jpg";

const About = () => {
  return (
    <div className="min-h-[900px] relative">
      <div className="h-[200px] bg-orange-300">
        <div className="my-8 absolute left-[6.5em] top-[4em]">
          <h4 className="text-2xl font-bold">PROUDLY PART OF</h4>
          <h4 className="text-2xl font-bold">BUKHATIR GROUP</h4>
        </div>
      </div>
      <div className="flex bg-gray-300 min-h-screen">
        <div className="px-[100px] flex-1">
          <div className="my-8">
            <h4 className="text-2xl font-bold">About</h4>
            <h4 className="text-2xl font-bold">Bukhatir Group</h4>
          </div>

          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={CompanyImage}
            className="w-[500px] h-[100%] absolute top-0 left-[30em]"
          />
        </div>

        <div className="px-[100px] flex-1">
          <h4 className="text-2xl font-bold my-6">Vision</h4>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <h4 className="text-2xl font-bold my-6">Mission</h4>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <p className="bg-green-600 absolute w-full px-2 py-1 bottom-[20%]">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        {/* <div className="absolute w-full h-full bottom-[0%]">
          <div className="text-white font-bold text-2xl md:text-4xl flex flex-nowrap text-nowrap">
            <h3 className="opacity-100 text-6xl">CI</h3>
            <h3 className="opacity-20 text-6xl">TYDA</h3>
            <h3 className="opacity-100 text-6xl">TE</h3>
          </div>
        </div> */}
      </div>
      {/* <div className="relative w-full h-64 bg-cover bg-center bg-[url('/hero-image.jpg')]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white font-bold text-2xl md:text-4xl flex flex-nowrap text-nowrap">
            <h3 className="opacity-100 text-6xl">CI</h3>
            <h3 className="opacity-20 text-6xl">TYDA</h3>
            <h3 className="opacity-100 text-6xl">TE</h3>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
