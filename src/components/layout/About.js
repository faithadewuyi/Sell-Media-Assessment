import Image from "next/image"; 
export default function About(){
  return(
    <>
    
   
    <div className="items-left justify-between max-w-6xl mx-auto p-4 mt-14">
    <h3 className="font-bold text-5xl mb-10">Who we are</h3>
    <p className="font-medium text-2xl">We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.</p>
    
    <div className=" mt-14 mb-14">
    <Image src="/Mid Image.png" layout="responsive" width={244.74} height={388} alt="emoji" />
    </div>

   <div className="p-4 rounded-md gap-10">
  <h3 className="font-bold text-3xl text-center xl:mb-10">Meet the heroes behind the magic</h3>
  
  <div className="flex flex-col md:flex-row gap-4 md:gap-12 xl:mb-12">
    <div className="flex-1 w-full md:max-w-[479px] h-80 p-4" style={{ boxShadow: '0 0 18px rgba(0, 0, 0, 0.1)' }}>
      <img src="/8.png" alt="avatar 1" className="w-full h-auto object-cover rounded-md" />
      <h4 className="text-left mt-2 mb-2 font-bold text-2xl">Esther Howard</h4>
      <p className="text-left mt-2 mb-2 font-medium text-2xl text-gray-500">Founder</p>
    </div>

    <div className="flex-1 w-full md:max-w-[479px] h-80 p-4" style={{ boxShadow: '0 0 18px rgba(0, 0, 0, 0.1)' }}>
      <img src="/b.png" alt="avatar 2" className="w-full h-auto object-cover rounded-md" />
      <h4 className="text-left mt-2 mb-2 font-bold text-2xl">Cody Fisher</h4>
      <p className="text-left mt-2 mb-2 font-medium text-2xl text-gray-500">Designer</p>
    </div>

    <div className="flex-1 w-full md:max-w-[479px] h-80 p-4" style={{ boxShadow: '0 0 18px rgba(0, 0, 0, 0.1)' }}>
      <img src="/c.png" alt="avatar 3" className="w-full h-auto object-cover rounded-md" />
      <h4 className="text-left mt-2 mb-2 font-bold text-2xl">Brooklyn Simmons</h4>
      <p className="text-left mt-2 mb-2 font-medium text-2xl text-gray-500">Founder</p>
       </div>
      </div>

        
        </div>

    </div>
    <div className="bg-btnblack flex flex-col md:flex-row px-6 md:px-32 mb-14 mt-12">
  <div className="p-3 mb-6 md:mb-0 md:mr-6 text-center md:text-left">
    <p className="font-bold text-4xl md:text-6xl text-priyellow">350 +</p>
    <p className="font-medium text-lg md:text-2xl text-white mt-4">
      Clients Worldwide
    </p>
  </div>
  <div className="p-3 mb-6 md:mb-0 md:mr-6 text-center md:text-left xl:ml-16">
    <p className="font-bold text-4xl md:text-6xl text-priyellow">20 +</p>
    <p className="font-medium text-lg md:text-2xl text-white mt-4">
      Team Members
    </p>
  </div>
  <div className="p-3 mb-6 md:mb-0 md:mr-6 text-center md:text-left xl:ml-16">
    <p className="font-bold text-4xl md:text-6xl text-priyellow">100 +</p>
    <p className="font-medium text-lg md:text-2xl text-white mt-4">
      Projects Completed
    </p>
  </div>
  <div className="p-3 mb-6 md:mb-0 text-center md:text-left xl:ml-16">
    <p className="font-bold text-4xl md:text-6xl text-priyellow">85M +</p>
    <p className="font-medium text-lg md:text-2xl text-white mt-4">
      Revenue Generated
    </p>
  </div>
</div>

    </>

  )
}