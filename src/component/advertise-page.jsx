import { useState,useEffect } from "react";

function Advertise() {
    const images = [
      "picture/image1.jpg",
      "picture/image2.jpg",
      "picture/image3.jpg",
      "picture/image4.jpg",
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [images.length]);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
    
  return (
    <>
      <div className="relative h-70vh mx-auto flex items-center justify-center bg-gray-100 lg:pt-24 pt-16">
        <video
          src="video/test.mp4"
          poster="video/test.mp4"
          className="m-4 rounded-lg object-cover"
          autoPlay
          muted
          loop
          preload="auto"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white space-y-4">
          <div className="text-7xl font-bold">Discover Your Style</div>
          <p className="text-3xl">Shop the latest trends and find your perfect look</p>
          <button className="bg-red-500 text-white py-5 px-10 rounded-full font-bold text-xl">
            Shop Now
          </button>
        </div>
      </div>
      <div className="relative h-70vh flex items-center justify-center">
        <div className="grid grid-cols-[25%_25%_50%] gap-10 w-full m-4 mx-36">
          <div className="relative w-full h-64 bg-[url('https://solink.com/wp-content/uploads/2023/11/how-to-sell-retail-clothing.jpg')] bg-cover bg-center bg-no-repeat rounded-lg">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center rounded-lg justify-center">
              <div className="text-white text-4xl font-bold">New Arrival</div>
              <div className="text-white my-2 text-lg">Up to 70% Off</div>
              <button className="text-black bg-white px-3 py-2 hover:bg-gray-200 rounded-md">Shop Now</button>
            </div>
          </div>

          <div className="relative w-full h-64 bg-[url('https://solink.com/wp-content/uploads/2023/11/how-to-sell-retail-clothing.jpg')] bg-cover bg-center bg-no-repeat rounded-lg">
            <div className="absolute inset-0 bg-orange-800 bg-opacity-50 flex flex-col items-center rounded-lg justify-center">
              <div className="text-white text-4xl font-bold">Limit Offer</div>
            </div>
          </div>

      <div className="relative w-full h-64 overflow-hidden ">
        <div className="flex transition-transform ease-in-out duration-500 z-10"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((src, index) => (
            <a key={index} href={src} target="_blank" rel="noopener noreferrer" className="w-full flex-shrink-0" style={{ width: `calc(100% / ${images.length})` }}>
              <img src={src} alt={`Image ${index + 1}`} className="w-full object-cover"/>
            </a>
          ))}
        </div>
        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-30 hover:bg-opacity-100 text-white px-3 py-2 z-30">&#10094;</button>
        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-30 hover:bg-opacity-100 text-white px-3 py-2 z-30">&#10095;</button>
        <div className="absolute inset-0 bg-blue-800 bg-opacity-30 flex flex-col items-center rounded-lg justify-center">
          <div className="text-white text-4xl font-bold">Season Sale</div>
          <div className="text-white my-2 text-lg">Up to 70% Off</div>
          <button className="text-white bg-blue-500 px-3 py-2 hover:bg-blue-600 rounded-md">Shop Now</button>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Advertise;
