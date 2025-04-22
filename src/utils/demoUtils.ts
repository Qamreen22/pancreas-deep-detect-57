
// Utility functions for the pancreatic cancer detection demo

// Function to get a placeholder scan if user doesn't upload an image
export const getPlaceholderScan = (): string => {
  // Try loading from public folder or fallback to a placeholder URL
  return '/pancreas-scan-placeholder.jpg';
};

// Simulated model information
export const modelInfo = {
  name: 'PancreasNet-v1',
  architecture: 'CNN-Transformer Hybrid',
  accuracy: '87.3%',
  sensitivity: '83.6%',
  specificity: '91.2%',
  dateUpdated: '2025-02-18',
};

// Simulated medical terminology for the application
export const medicalTerms = [
  {
    term: 'Pancreatic Adenocarcinoma',
    definition: 'The most common type of pancreatic cancer that forms in the exocrine cells of the pancreas.'
  },
  {
    term: 'Pancreatic Cyst',
    definition: 'A fluid-filled sac in the pancreas, which may be benign or potentially malignant.'
  },
  {
    term: 'Intraductal Papillary Mucinous Neoplasm (IPMN)',
    definition: 'A type of tumor that grows within the pancreatic ducts and produces mucin.'
  },
  {
    term: 'Pancreatic Neuroendocrine Tumor (PNET)',
    definition: 'A rare type of tumor that forms in the hormone-producing cells of the pancreas.'
  },
  {
    term: 'CA 19-9',
    definition: 'A tumor marker that may be elevated in pancreatic cancer, though it\'s not specific only to this cancer.'
  },
];

// Reference ranges for different pancreatic features in imaging
export const referenceRanges = {
  normalPancreasSize: '14-18cm in length, 2-3cm in width',
  normalDuctDiameter: '<3mm',
  cystSize: {
    low: '<1cm',
    moderate: '1-3cm',
    high: '>3cm'
  },
  tumorSize: {
    t1: '≤2cm',
    t2: '>2cm but ≤4cm',
    t3: '>4cm',
    t4: 'Any size with arterial involvement'
  }
};
