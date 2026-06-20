import { Facebook, Instagram, Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Instagram Banner */}
      <div className="bg-[#f5f5f5] py-16 text-center border-b border-gray-200">
        <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-gray-800">
          LEARN MORE ABOUT YOUR SKIN BY FOLLOWING US ON INSTAGRAM
        </h4>
        <button className="border border-black bg-white text-black px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
          Follow Now
        </button>
      </div>

      {/* Caution Notice */}
      <div className="bg-white py-12 px-4 text-center border-b border-gray-200">
        <div className="max-w-4xl mx-auto space-y-4 text-xs tracking-wide">
           <h4 className="font-bold text-black uppercase mb-4">CAUTION NOTICE</h4>
           <p className="font-light text-gray-800 leading-relaxed font-semibold">
              Deconstruct is committed to your security and satisfaction. We never ask for your OTP, password, or personal details via phone or unsolicited communication.
           </p>
           <p className="font-bold text-black leading-relaxed">
              If you receive such a request, do not share any information. We also do not require payments for contests, lucky draws, or promotions outside our official platform.
           </p>
           <p className="font-light text-gray-800 leading-relaxed text-[10px]">
              For accurate information, refer to our official website or verified social media. This message is for your safety and public interest.
           </p>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 px-4 font-sans text-sm font-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-gray-800 pb-16">
            
            {/* Branding */}
            <div className="order-4 lg:order-1 flex items-end">
              <p className="text-gray-300 leading-relaxed pr-8">
                Deconstruct offers a wide range of Beginner-friendly highly effective yet gentle skincare products.
              </p>
            </div>

            {/* About */}
            <div className="order-1 lg:order-2">
              <h4 className="text-center font-semibold tracking-[0.2em] mb-4 text-white">ABOUT</h4>
              <div className="w-4 h-[1px] bg-white mx-auto mb-6"></div>
              <ul className="space-y-4 text-center text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Philosophy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms and conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Return Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refer and Earn</a></li>
              </ul>
            </div>

            {/* Quick Links & Available On */}
            <div className="order-2 lg:order-3 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-center font-semibold tracking-[0.2em] mb-4 text-white text-xs whitespace-nowrap">ALSO AVAILABLE ON</h4>
                <div className="w-4 h-[1px] bg-white mx-auto mb-6"></div>
                <ul className="space-y-4 text-center text-gray-400 text-xs">
                  <li><a href="#" className="hover:text-white transition-colors">Amazon</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Flipkart</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Nykaa</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Myntra</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Purplle</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blinkit</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Zepto</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Instamart</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-center font-semibold tracking-[0.2em] mb-4 text-white text-xs whitespace-nowrap">QUICK LINKS</h4>
                <div className="w-4 h-[1px] bg-white mx-auto mb-6"></div>
                <ul className="space-y-4 text-center text-gray-400 text-xs">
                  <li><a href="#" className="hover:text-white transition-colors">My Account</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Grievance Officer</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Our Ingredients</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
                </ul>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="order-3 lg:order-4 text-center">
              <h4 className="font-semibold tracking-[0.2em] mb-4 text-white">GET IN TOUCH</h4>
              <div className="w-4 h-[1px] bg-white mx-auto mb-6"></div>
              
              <div className="flex justify-center space-x-6 mb-8 text-gray-400">
                <a href="#" className="hover:text-white"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-white"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="hover:text-white"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-white"><Youtube className="w-4 h-4" /></a>
              </div>

              <h5 className="font-semibold tracking-widest text-[10px] mb-3">ADDRESS</h5>
              <div className="flex text-gray-400 text-xs justify-center text-center px-4 mb-6 leading-relaxed">
                 <p>581, 2nd Floor, 1st Main, 6th Sector, HSR Layout, Bengaluru, Karnataka - 560102</p>
              </div>

              <h5 className="font-semibold tracking-widest text-[10px] mb-3">EMAIL</h5>
              <div className="flex items-center justify-center text-gray-400 text-sm mb-6">
                 <Mail className="w-3 h-3 mr-2" />
                 <a href="mailto:wecare@thedeconstruct.in" className="hover:text-white transition-colors text-xs">wecare@thedeconstruct.in</a>
              </div>

              <h5 className="font-semibold tracking-widest text-[10px] mb-3">PHONE</h5>
              <div className="flex flex-col items-center justify-center text-gray-400 text-sm">
                 <div className="flex items-center mb-1">
                    <Phone className="w-3 h-3 mr-2" />
                    <span className="text-xs tracking-wider">080-471-05772</span>
                 </div>
                 <span className="text-[10px]">(Monday - Sunday 10am - 7pm)</span>
              </div>
            </div>
          </div>

          <div className="py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
             <div className="flex items-center space-x-2 mb-4 md:mb-0">
               <span className="text-gray-400 font-medium tracking-widest">PAYMENT OPTIONS</span>
               <div className="flex space-x-2 ml-4">
                 <div className="w-10 h-6 bg-white rounded-sm opacity-80"></div>
                 <div className="w-10 h-6 bg-white rounded-sm opacity-80"></div>
                 <div className="w-10 h-6 bg-white rounded-sm opacity-80"></div>
                 <div className="w-10 h-6 bg-white rounded-sm opacity-80"></div>
                 <div className="w-10 h-6 bg-white rounded-sm opacity-80"></div>
               </div>
               <span className="ml-2 font-mono text-[10px]">AND MANY MORE...</span>
             </div>
          </div>
          
          <div className="pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between text-[11px] text-gray-500 text-center md:text-left">
             <p>&copy; The Deconstruct 2025. All rights Reserved.</p>
             <p className="mt-2 md:mt-0 uppercase tracking-wider">GST NO: 29AAICB9825H1Z8</p>
          </div>
        </div>
      </footer>
    </>
  );
}
