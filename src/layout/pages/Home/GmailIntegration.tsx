import logo from '../../../assets/logo.png'
import gmail from '../../../assets/gmail.png'
const GmailIntegration = () => {
  return (
    <div className='mx-[8%] border-b-2 border-t-2 border-green-700 '>
        <div className='flex flex-row justify-center'>
            <img src={logo} alt="logo" className='h-44' />
            <span className='h-44 text-green-700 text-9xl font-extralight mx-10 my-auto'>x</span>
            <img src={gmail} alt="gmail" className='h-44' />
        </div>
    </div>
  )
}

export default GmailIntegration