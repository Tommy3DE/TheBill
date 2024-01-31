import SlimNav from '../../layout/SlimNav'
import MailScan from './components/MailScan'

const Scan = () => {
  return (
    <div>
    <SlimNav />
    <div className="mx-auto max-w-[1980px] ">
    <MailScan />
    </div>
    </div>
  )
}

export default Scan