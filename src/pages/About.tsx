
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-medical-purple py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              About Our Technology
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The science behind our deep learning pancreatic cancer detection system
            </p>
          </div>
        </section>
        
        {/* Technology Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Challenge of Pancreatic Cancer Detection
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Pancreatic cancer is one of the most challenging cancers to detect and treat, with a five-year survival rate of only about 10%. The pancreas is located deep in the abdomen, making early detection difficult through physical examination.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                By the time symptoms appear, the cancer has often already spread to other organs. This is why advanced imaging and analysis tools are crucial for early detection, potentially increasing survival rates significantly.
              </p>
              
              <div className="my-12 border-l-4 border-medical-blue pl-6 py-2">
                <p className="text-xl text-gray-800 italic">
                  "Early detection is our best weapon against pancreatic cancer. Combining advanced imaging with AI analysis offers new hope for identifying subtle changes that might indicate early disease."
                </p>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                How Deep Learning Is Changing Medical Imaging
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Deep learning, a subset of artificial intelligence, has revolutionized medical image analysis by its ability to identify patterns that might be invisible to the human eye. Our system uses convolutional neural networks (CNNs) that have been trained on thousands of annotated pancreatic images.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our AI Technology Pipeline
                </h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="bg-medical-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Image Preprocessing</h4>
                      <p className="text-gray-700">Advanced normalization techniques to standardize input images regardless of the imaging equipment used.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-medical-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Feature Extraction</h4>
                      <p className="text-gray-700">Specialized deep learning models extract relevant features from pancreatic tissue regions.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-medical-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Anomaly Detection</h4>
                      <p className="text-gray-700">AI models trained to identify deviations from normal pancreatic tissue patterns.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-medical-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Classification</h4>
                      <p className="text-gray-700">Each detected region is classified with a confidence score indicating the likelihood of abnormality.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-medical-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                    <div>
                      <h4 className="font-medium text-gray-900">Visualization</h4>
                      <p className="text-gray-700">Results are presented through intuitive visualizations that highlight areas of concern.</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                The Future of AI in Pancreatic Cancer Detection
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                As deep learning algorithms continue to improve and more data becomes available, we anticipate even greater accuracy in early detection. Future versions of our system aim to incorporate additional data types, including:
              </p>
              <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-8">
                <li>Multi-modal imaging integration (CT, MRI, PET, ultrasound)</li>
                <li>Longitudinal analysis to detect changes over time</li>
                <li>Integration with biomarker data and genetic risk factors</li>
                <li>Predictive modeling for personalized screening recommendations</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-medical-blue py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Experience Our Technology First-hand
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Upload a scan and see how our AI detection system works
            </p>
            <Button 
              asChild
              size="lg" 
              className="bg-white text-medical-blue hover:bg-white/90"
            >
              <Link to="/diagnosis">Try the Diagnostic Tool</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
