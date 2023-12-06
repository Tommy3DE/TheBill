import set from '../../../assets/innerSettingsIcons/set 1.png'
import folder from '../../../assets/innerSettingsIcons/folder 1.png'
import email from '../../../assets/innerSettingsIcons/email 1.png'


type SettingsTiles = {
  id: number;
  title: string;
  route: string;
  icon: string
}
const SettingsRoutes = () => {
  const settings: SettingsTiles[] = [
    {
      id: 1,
      title: 'Zdefiniowane adresy e-mail',
      icon: email,
      route: ''
    },
    {
      id: 2,
      title: 'Ścieżki folderów',
      icon: folder,
      route: ''
    },
    {
      id: 3,
      title: 'Ogólne ustawienia konta',
      icon: set,
      route: ''
    },
  ]
  return (
    <div className='flex lg:flex-row flex-col justify-center lg:h-screen items-center'>
      {settings.map((item)=>(
        <div key={item.id} className=' w-2/12 text-xl rounded-lg mx-2 flex flex-col justify-evenly items-center bg-green-300 h-1/3 hover:scale-105 hover:bg-green-200 border-2 border-green-800 cursor-pointer font-black'>
          <img src={item.icon} alt={item.title} className='h-20 w-20'/>
          <p>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  )
}

export default SettingsRoutes