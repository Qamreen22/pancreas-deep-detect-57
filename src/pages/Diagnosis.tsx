
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageUploader from "@/components/ImageUploader";
import DetectionResult from "@/components/DetectionResult";
import Heatmap from "@/components/Heatmap";
import InfoPanel from "@/components/InfoPanel";

interface ResultRegion {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
  label: string;
}

const Diagnosis = () => {
  const [selectedImage, setSelectedImage] = useState<{ file: File, url: string } | null>(null);
  const [analysisResults, setAnalysisResults] = useState<ResultRegion[]>([]);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  const handleImageSelect = (imageFile: File, imageUrl: string) => {
    setSelectedImage({ file: imageFile, url: imageUrl });
    setAnalysisComplete(false);
    setAnalysisResults([]);
  };
  
  const handleAnalysisComplete = (results: ResultRegion[]) => {
    setAnalysisResults(results);
    setAnalysisComplete(true);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Pancreatic Cancer Detection
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Upload & Info */}
            <div className="space-y-8">
              <ImageUploader onImageSelect={handleImageSelect} />
              
              {!selectedImage && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    How it works
                  </h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>Upload a CT or MRI scan of the pancreatic region</li>
                    <li>Our AI model will analyze the image</li>
                    <li>View the detection results and visualization</li>
                    <li>Explore detailed findings and recommendations</li>
                  </ol>
                  <p className="text-sm text-gray-600 mt-4">
                    Note: This is a demonstration system and not intended for actual medical diagnosis.
                  </p>
                </div>
              )}
              
              <InfoPanel />
            </div>
            
            {/* Middle & Right Column - Results */}
            <div className="lg:col-span-2 space-y-8">
              {selectedImage ? (
                <>
                  <DetectionResult 
                    imageUrl={selectedImage.url} 
                    onAnalysisComplete={handleAnalysisComplete} 
                  />
                  
                  {analysisComplete && (
                    <Heatmap 
                      imageUrl={selectedImage.url} 
                      results={analysisResults} 
                    />
                  )}
                </>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200 p-8 text-center h-full flex flex-col items-center justify-center">
                  <svg 
                    className="w-16 h-16 text-gray-300 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1} 
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    No Image Selected
                  </h2>
                  <p className="text-gray-500 max-w-md">
                    Upload a pancreatic CT or MRI scan to begin the analysis process.
                    The AI model will process your image and display the results here.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Diagnosis;
