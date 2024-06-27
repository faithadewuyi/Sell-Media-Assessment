import Image from 'next/image';
import Link from 'next/link';

export default function SuccessPage(){

  return(
    <div className="flex flex-col items-center justify-center m-14 h-[300px]">
      <Image  src={'/v.png'} alt={""} width={100} height={100}/>
      <h1 className="text-4xl font-bold text-priyellow mt-4">Form Submitted Successfully!</h1>
      <p className="text-lg mt-4">Thank you for your submission.</p>
      <Link href="/"
         className="mt-4 text-black underline-priyellow hover:text-priyellow ">Go back to Home
      </Link>
    </div>

  )
}