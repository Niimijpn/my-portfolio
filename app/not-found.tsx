import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='p-8 flex justify-center items-center flex-col col-span-1'>
      <Image src='/sample.png' width='300' height='300' alt='404'/>
      <p>Could not find requested resource</p>
      <Link className='hover:text-white' href="/">Return Home</Link>
    </div>
  )
}