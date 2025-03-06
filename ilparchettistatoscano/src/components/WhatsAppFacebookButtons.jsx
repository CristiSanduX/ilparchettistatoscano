function WhatsAppFacebookButtons() {
    return (
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
  
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/393298476668"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6"/>
          <span>WhatsApp</span>
        </a>
  
        {/* Facebook Button */}
        <a
          href="https://www.facebook.com/Ilparchettistatoscano.it?mibextid=wwXIfr" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6"/>
          <span>Facebook</span>
        </a>
  
      </div>
    )
  }
  
  export default WhatsAppFacebookButtons
  