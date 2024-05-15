import { Typography } from "@mui/material";

export default function Contact(){
    return (
        <div className="pt-8 pb-16 flex justify-center items-center flex-col w-4/5 mx-auto my-0">
      <Typography variant="h3" className='mb-4'>コンタクト</Typography>
      <Typography variant='body1' className="mb-4 text-center">もし私に興味のある方はメール、またはX（旧Twitter）のDMまでご連絡ください。
      </Typography>
      <a href="mailto:niimicomputergraphics@gmail.com" className='bg-yellow-400 text-gray-900 hover:bg-[#b3b3b3] px-4 py-2 rounded-md transition-all duration-500 ease-in-out cursor-pointer inline-block'><Typography variant="button">メール</Typography></a>
    </div>
    );
}