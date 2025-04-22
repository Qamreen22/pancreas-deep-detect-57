
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-medical-blue to-medical-lightblue py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Advanced Pancreatic Cancer Detection
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Using deep learning to help identify potential pancreatic abnormalities from medical scans
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-medical-blue hover:bg-white/90 hover:text-medical-purple"
              >
                <Link to="/diagnosis">Start Diagnosis</Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Advanced AI-Powered Analysis
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                <div className="bg-medical-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-medical-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Learning Analysis</h3>
                <p className="text-gray-600">
                  Our system utilizes state-of-the-art deep learning algorithms trained on thousands of pancreatic images.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                <div className="bg-medical-purple/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-medical-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Heatmaps</h3>
                <p className="text-gray-600">
                  Visualize areas of concern with intuitive heatmaps that highlight potential abnormalities.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                <div className="bg-medical-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-medical-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Reports</h3>
                <p className="text-gray-600">
                  Receive comprehensive analysis with confidence scores and region-specific information.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Information Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Early Detection is Critical
                </h2>
                <p className="text-gray-700 mb-4">
                  Pancreatic cancer is often diagnosed at an advanced stage, making early detection crucial for improving survival rates. Modern imaging technologies combined with AI analysis can help identify subtle abnormalities that might otherwise be missed.
                </p>
                <p className="text-gray-700 mb-6">
                  Our system is designed to assist medical professionals in identifying potential issues that warrant further investigation, potentially leading to earlier diagnosis and intervention.
                </p>
                <Button 
                  asChild
                  className="bg-medical-blue hover:bg-medical-purple"
                >
                  <Link to="/about">Read More About Our Technology</Link>
                </Button>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" 
                  alt="Medical Imaging Technology" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-medical-purple py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Try Our AI-Powered Detection System
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Upload a medical scan and receive instant analysis with our deep learning technology
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-white text-medical-purple hover:bg-white/90"
            >
              <Link to="/diagnosis">Start Now</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
