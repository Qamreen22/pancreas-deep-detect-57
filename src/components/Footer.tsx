
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">PancreasScan</h3>
            <p className="text-gray-600">
              Advanced medical imaging analysis using deep learning to aid in the early detection of pancreatic cancer.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-medical-blue hover:text-medical-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/diagnosis" className="text-medical-blue hover:text-medical-purple transition-colors">
                  Diagnosis
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-medical-blue hover:text-medical-purple transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Disclaimer</h3>
            <p className="text-gray-600 text-sm">
              This system is for educational purposes only. It is not intended to diagnose, treat, cure, or prevent any disease. Always consult with qualified healthcare providers for medical advice.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PancreasScan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
