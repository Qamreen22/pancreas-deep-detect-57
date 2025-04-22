
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResultRegion {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
  label: string;
}

interface DetectionResultProps {
  imageUrl: string;
  onAnalysisComplete: (results: ResultRegion[]) => void;
}

const DetectionResult = ({ imageUrl, onAnalysisComplete }: DetectionResultProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<ResultRegion[]>([]);
  const [overallScore, setOverallScore] = useState(0);
  const [riskLevel, setRiskLevel] = useState('');
  
  // Simulate ML analysis process
  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    
    if (isAnalyzing) {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setIsAnalyzing(false);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
    }
    
    // Generate simulated results after "analysis" is complete
    const analysisTimeout = setTimeout(() => {
      // Simulated detection results
      const simulatedResults: ResultRegion[] = [
        {
          id: 1,
          x: 150,
          y: 120,
          width: 60,
          height: 40,
          confidence: 0.86,
          label: 'Suspicious Region'
        },
        {
          id: 2,
          x: 210,
          y: 180,
          width: 30,
          height: 30,
          confidence: 0.68,
          label: 'Potential Cyst'
        },
        {
          id: 3,
          x: 100,
          y: 150,
          width: 45,
          height: 35,
          confidence: 0.72,
          label: 'Tissue Anomaly'
        }
      ];
      
      setResults(simulatedResults);
      
      // Calculate overall risk score (simulated algorithm)
      const score = simulatedResults.reduce((acc, region) => acc + region.confidence, 0) / simulatedResults.length;
      setOverallScore(Math.round(score * 100));
      
      // Determine risk level based on score
      if (score > 0.8) {
        setRiskLevel('High');
      } else if (score > 0.5) {
        setRiskLevel('Moderate');
      } else {
        setRiskLevel('Low');
      }
      
      // Report the results back to the parent component
      onAnalysisComplete(simulatedResults);
      
    }, 3000);
    
    return () => {
      clearInterval(progressInterval);
      clearTimeout(analysisTimeout);
    };
  }, [imageUrl, onAnalysisComplete]);
  
  const getRiskBadgeColor = () => {
    switch (riskLevel) {
      case 'High':
        return 'bg-medical-red text-white hover:bg-medical-red/90';
      case 'Moderate':
        return 'bg-medical-yellow text-black hover:bg-medical-yellow/90';
      case 'Low':
        return 'bg-green-500 text-white hover:bg-green-500/90';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">Detection Results</CardTitle>
      </CardHeader>
      <CardContent>
        {isAnalyzing ? (
          <div className="space-y-4 py-8">
            <Progress value={progress} className="h-2" />
            <div className="text-center">
              <p className="text-medical-blue font-medium">Analyzing pancreatic scan</p>
              <p className="text-sm text-gray-500 mt-1">
                Running deep learning algorithms to detect potential anomalies
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {['Feature extraction', 'Tumor detection', 'Classification'].map((step, i) => (
                <div 
                  key={i}
                  className={`p-3 rounded-lg border ${
                    progress > (i + 1) * 33 ? 'border-medical-blue bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <p className={`text-sm ${progress > (i + 1) * 33 ? 'text-medical-blue' : 'text-gray-500'}`}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Detailed Results</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Overall Analysis</h3>
                  <p className="text-sm text-gray-500">Based on deep learning model findings</p>
                </div>
                <Badge className={getRiskBadgeColor()}>
                  {riskLevel} Risk
                </Badge>
              </div>
              
              <div className="flex items-center mt-4">
                <div className="w-full">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      Confidence Score
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      {overallScore}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        riskLevel === 'High' ? 'bg-medical-red' : 
                        riskLevel === 'Moderate' ? 'bg-medical-yellow' : 'bg-green-500'
                      }`} 
                      style={{ width: `${overallScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-800">
                  <span className="font-semibold">Note:</span> These results are simulated for demonstration purposes. 
                  In a real medical environment, all findings should be reviewed by qualified healthcare professionals.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="details">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Detected Regions</h3>
                {results.map((region) => (
                  <div key={region.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-800">{region.label}</h4>
                        <p className="text-sm text-gray-500">
                          Position: x={region.x}, y={region.y}, size={region.width}×{region.height}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-medical-blue border-medical-blue">
                        {Math.round(region.confidence * 100)}% confidence
                      </Badge>
                    </div>
                    <Progress 
                      value={region.confidence * 100} 
                      className="h-1.5 mt-2" 
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
};

export default DetectionResult;
