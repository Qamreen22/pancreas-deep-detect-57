
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

interface HeatmapProps {
  imageUrl: string;
  results: ResultRegion[];
}

const Heatmap = ({ imageUrl, results }: HeatmapProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTab, setActiveTab] = useState('heatmap');
  
  useEffect(() => {
    if (!canvasRef.current || !imageUrl || results.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const img = new Image();
    img.src = imageUrl;
    
    img.onload = () => {
      // Set canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the original image
      ctx.drawImage(img, 0, 0);
      
      if (activeTab === 'heatmap') {
        // Draw heatmap overlay
        results.forEach(region => {
          // Create radial gradient for heatmap effect
          const gradient = ctx.createRadialGradient(
            region.x + region.width / 2,
            region.y + region.height / 2,
            0,
            region.x + region.width / 2,
            region.y + region.height / 2,
            Math.max(region.width, region.height)
          );
          
          // Use red color with varying opacity based on confidence
          gradient.addColorStop(0, `rgba(234, 67, 53, ${region.confidence})`);
          gradient.addColorStop(0.7, `rgba(234, 67, 53, ${region.confidence * 0.3})`);
          gradient.addColorStop(1, 'rgba(234, 67, 53, 0)');
          
          ctx.fillStyle = gradient;
          ctx.globalAlpha = 0.7;
          ctx.fillRect(
            region.x - region.width / 2,
            region.y - region.height / 2,
            region.width * 2,
            region.height * 2
          );
        });
      } else if (activeTab === 'bounding') {
        // Draw bounding boxes
        results.forEach(region => {
          ctx.strokeStyle = '#EA4335';
          ctx.lineWidth = 2;
          ctx.strokeRect(region.x, region.y, region.width, region.height);
          
          // Add label
          ctx.fillStyle = '#EA4335';
          ctx.globalAlpha = 0.8;
          ctx.fillRect(region.x, region.y - 20, region.label.length * 7 + 20, 20);
          
          ctx.fillStyle = 'white';
          ctx.font = '12px Arial';
          ctx.globalAlpha = 1;
          ctx.fillText(
            `${region.label} (${Math.round(region.confidence * 100)}%)`,
            region.x + 5,
            region.y - 5
          );
        });
      }
    };
  }, [imageUrl, results, activeTab]);
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">Visual Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="heatmap" onValueChange={setActiveTab} value={activeTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="heatmap">Heatmap View</TabsTrigger>
            <TabsTrigger value="bounding">Bounding Box View</TabsTrigger>
          </TabsList>
          
          <div className="bg-gray-100 p-2 rounded-lg">
            <canvas 
              ref={canvasRef} 
              className="w-full rounded" 
              style={{ maxHeight: '500px', objectFit: 'contain' }}
            />
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>
              {activeTab === 'heatmap' 
                ? 'Heatmap visualization showing areas of concern with intensity proportional to detection confidence.'
                : 'Bounding box visualization highlighting specific areas that the AI model has identified as potentially abnormal.'}
            </p>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Heatmap;
