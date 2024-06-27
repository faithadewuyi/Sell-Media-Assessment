import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen bg-secyellow overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Background Images */}
        <div className="absolute inset-0 z-0 flex justify-between">
          <div className="w-1/2 h-full bg-left bg-cover bg-no-repeat bg-left-image"></div>
          <div className="w-1/2 h-full bg-right bg-cover bg-no-repeat bg-right-image"></div>
        </div>

        {/* Hero */}
        <div className="relative z-10 mt-[-300px] md:mt-[-200px] lg:mt-[-160px] xl:mt-[-200px]">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center text-textcol w-[90%] md:w-[75%] lg:w-[60%] xl:w-[1121px] mx-auto">
            Let &apos;s create something great together.
          </h1>
        </div>
      </div>

      {/* Bottom Images */}
      <div className="absolute bottom-12 xl:left-0 right-0 flex justify-center gap-4 max-w-6xl mx-auto p-4 md:p-8 lg:p-12 xl:bottom-[-46px]" >
        <div className="relative w-1/6 h-auto">
          <Image src="/1.png" layout="responsive" width={244.74} height={388} alt="emoji" />
        </div>
        <div className="relative w-1/6 h-auto">
          <Image src="/2.png" layout="responsive" width={244.74} height={388} alt="emoji" />
        </div>
        <div className="relative w-1/6 h-auto">
          <Image src="/3.png" layout="responsive" width={244.74} height={388} alt="emoji" />
        </div>
        <div className="relative w-1/6 h-auto">
          <Image src="/4.png" layout="responsive" width={244.74} height={388} alt="emoji" />
        </div>
        <div className="relative w-1/6 h-auto">
          <Image src="/5.png" layout="responsive" width={244.74} height={388} alt="emoji" />
        </div>
        <div className="relative w-1/6 h-auto">
          <Image src="/6.png" layout="responsive" width={244.74} height={388} alt="emoji" />
        </div>
      </div>
    </div>
  );
}
