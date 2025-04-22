
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoPanel = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">Pancreatic Cancer Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medical-blue font-medium">
              About Pancreatic Cancer
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-2">
              <p>
                Pancreatic cancer is a disease in which malignant (cancerous) cells form in the tissues of the pancreas. The pancreas is a gland located behind the stomach and in front of the spine.
              </p>
              <p>
                It produces digestive juices and hormones that regulate blood sugar. Pancreatic cancer typically spreads rapidly and is seldom detected in its early stages, which is a major reason why it's a leading cause of cancer death.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medical-blue font-medium">
              Early Detection Importance
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-2">
              <p>
                Early detection of pancreatic cancer is crucial for improving survival rates. Unfortunately, the disease is often diagnosed at an advanced stage when it's more difficult to treat.
              </p>
              <p>
                Screening high-risk individuals, such as those with a family history of pancreatic cancer or specific genetic syndromes, is an important strategy for early detection.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medical-blue font-medium">
              Imaging Techniques
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-2">
              <p>
                Several imaging techniques are used to diagnose pancreatic cancer:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>CT (Computed Tomography) scans</li>
                <li>MRI (Magnetic Resonance Imaging)</li>
                <li>Endoscopic ultrasound (EUS)</li>
                <li>ERCP (Endoscopic Retrograde Cholangiopancreatography)</li>
                <li>PET (Positron Emission Tomography) scans</li>
              </ul>
              <p className="mt-2">
                These techniques help visualize the pancreas and surrounding structures to identify abnormalities that might indicate cancer.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medical-blue font-medium">
              How AI Assists in Detection
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-2">
              <p>
                Artificial Intelligence and deep learning models can analyze medical images to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Identify subtle patterns that might not be visible to the human eye</li>
                <li>Quantify features like texture, shape, and density</li>
                <li>Compare findings with thousands of previous cases</li>
                <li>Provide consistency in interpretation</li>
                <li>Reduce the time required for analysis</li>
              </ul>
              <p className="mt-2">
                AI is designed to assist medical professionals, not replace them. The final diagnosis should always be made by qualified healthcare providers.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default InfoPanel;
