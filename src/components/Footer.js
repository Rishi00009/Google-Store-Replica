import { footerSections, socialMediaLinks } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20 ml-10">
      <div className="max-w-7xl mx-auto px-4 p-10">
        <p className="flex flex-row text-2xl font-semibold  ml-8  text-gray-600 mb-16">
          <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
                alt="Google Logo"
                className="h-11 w-11 mr-2"
              />
          <p className='mt-2'>Google Store</p>
          </p>
        <div className="flex flex-wrap gap-16 text-2xl ml-10">
          {Object.entries(footerSections).map(([section, items]) => (
            <div key={section} className="min-w-[200px]">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 capitalize">
                {section}
              </h3>
              <ul className="space-y-5 ">
                {items.map((item, index) => (
                  <li key={index}>
                    <a href="./" className="text-gray-600 hover:text-blue-600 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-row  mt-16">
          <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6eZSr4hiJeLntUzmJVrmWlqfEFTiMj-ZkWwWrOWrOm55FQ05xTdwMPcdkUVroLYJZ1k&usqp=CAU"
                alt="Google Logo"
                className="h-4 w-6 mr-2"
              />
          <div className='flex flex-row gap-6 text-xs text-gray-600'>
            <p>India</p>
            <p>privacy</p>
            <p>Google Nest Commitment to Privacy</p>
            <p>Sales Terms</p>
            <p>Terms of Service</p>
          </div>
          
          <div className="flex flex-row items-center ml-auto">
            {/* Social media icons */}
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={link.icon} alt={link.name} className="h-5 w-5 mr-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}