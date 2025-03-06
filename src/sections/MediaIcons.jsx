import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

const MediaIcons = () => {
    return (
        <div className='fixed left-0 top-1/2 cursor-pointer bg-[#343131] py-4 flex justify-center items-center flex-col gap-3 px-3 rounded-tr-lg rounded-br-lg z-50'>
            <a
                href='https://github.com/Shreyas-Patil-11'
                target='_blank'
                className='p-1 rounded-sm bg-[#E4E4E6] hover:bg-[#b8b8ba] transition-all hover:-translate-y-1 hover:rotate-6'>
                <AiOutlineGithub fontSize={26} />
            </a>
            <a
                href='https://www.linkedin.com/in/shreyas-patil11/'
                target='_blank'
                className='p-1 rounded-sm bg-indigo-500 hover:bg-indigo-600 transition-all hover:-translate-y-1 hover:rotate-6'>
                <AiOutlineLinkedin fontSize={26} />
            </a>
            <a
                href="mailto:shreyaspatil1311@gmail.com"
                target="_blank"
                className="p-2 rounded-sm bg-red-300 hover:bg-red-400 transition-all hover:-translate-y-1 hover:rotate-6 shadow-md hover:shadow-lg flex items-center justify-center"
            >
                <AiOutlineMail fontSize={26} className="text-red-800" />
            </a>



        </div>
    )
}

export default MediaIcons