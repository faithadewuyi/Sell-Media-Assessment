
import Image from "next/image"
import Link from "next/link"
export default function Footer(){
  return(
    <>
    <div className="items-center justify-between  w-full p-4 sticky  bg-[#F5F5F5]"> 
      <div className="flex justify-between">
      <div className="pl-14">
        <h3 className="font-bold">Hand</h3>
        <p>We love what we do and create partnerships</p>
        </div>
        <div className="flex flex-col justify-center items-end pr-10">
        <Link href=""  className="bg-btnblack text-white px-6 py-2 rounded text-sm mb-4">Start a project</Link>
        <p>hello@devseal.tech</p>
        </div>
        
      </div>
      
      <div className="flex justify-end pr-10 gap-x-4 mt-4">
        <Image src={'/x.png'} alt={""} width={10} height={10}/>
        <Image src={'/l.png'} alt={""} width={15} height={10}/>
        <Image src={'/f.png'} alt={""} width={15} height={10}/>
        <Image src={'/i.png'} alt={""} width={15} height={10}/>
          <p>Hand</p>
        </div>
        

        <div className="flex items-center justify-center my-8">
  <div className="w-1/2 h-0.5 bg-[#525D6A]"></div>
</div>
      <div className="pl-14 mt-10">
       <p>&copy; 2024 Faith Adewuyi. All Rights Reserved</p> 
      </div>
      <div className="flex justify-end pr-10 gap-x-4 "> 
      <p> PrivacyPolicy</p>
      <p>Media Kit</p>
      </div>

     
    </div>
    

    </>
  )
}