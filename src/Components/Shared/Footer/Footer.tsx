import logo from '../../../assets/logo.png'
import fb from '../../../assets/fb.png'
import lk from '../../../assets/lk.png'
import tw from '../../../assets/tw.png'
import py from '../../../assets/py.png'

const Footer = () => {
  const h1 = 'text-xl font-semibold text-gray-700'
  const features = [
    { name: 'About', link: 'example.com' },
    { name: 'Terms and Conditions', link: 'example.com' },
    { name: 'Best Products', link: 'example.com' },
  ]
  const generalLinks = [
    { name: 'About', link: 'example.com' },
    { name: 'Terms and Conditions', link: 'example.com' },
    { name: 'Best Products', link: 'example.com' },
  ]
  const socialLinks = [
    {
      name: 'Facebook',
      icon: fb,
      link: 'example.com',
    },
    {
      name: 'Facebook',
      icon: lk,
      link: 'example.com',
    },
    {
      name: 'Facebook',
      icon: tw,
      link: 'example.com',
    },
    {
      name: 'Facebook',
      icon: py,
      link: 'example.com',
    },
  ]
  return (
    <div className="mt-4 bg-white w-full">
      {/* Logo Section */}
      <div className="py-5">
        <div className="flex justify-center items-center gap-2">
          <img src={logo} className="w-16 h-auto" alt="Logo" />
          <h2 className="text-4xl">Super Shop</h2>
        </div>
      </div>
      {/* Divider */}
      <div className="divider w-5/6 mx-auto"></div>
      {/* Main Footer */}
      <div className="py-5 w-5/6 mx-auto">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h1 className={`${h1}`}>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor et, aliquam dicta, consectetur itaque quos ipsam sapiente
              adipisci aspernatur dolore hic necessitatibus veritatis iusto
              tempo.
            </p>
          </div>
          <div>
            <h1 className={`${h1}`}>Features</h1>
            <ul>
              {features.map((item, i) => (
                <li key={i}>
                  <a href={item?.link}>{item?.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className={`${h1}`}>General Links</h1>
            <ul>
              {generalLinks.map((item, i) => (
                <li key={i}>
                  <a href={item?.link}>{item?.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className={`${h1}`}>Helpful</h1>
            <ul>
              {generalLinks.map((item, i) => (
                <li key={i}>
                  <a href={item?.link}>{item?.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="divider w-5/6 mx-auto"></div>
      {/* Short Footer of Footer */}
      <div className="flex pb-5 justify-center">
        <div className="pe-5">
          <ul className="flex justify-center items-center gap-2">
            {socialLinks.map((item, i) => (
              <a key={i} href={item?.link}>
                <img className="w-6 h-6" src={item?.icon} alt="icon" />
              </a>
            ))}
          </ul>
        </div>
        <div>
          <small>
            @2023 | All copyright receive by{' '}
            <span className="font-bold">MD. FAYSAL</span>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Footer
