const PptxGenJS = require("pptxgenjs");

const slidesData = [
  {
    title: "Exercise 1: Hamming Code Analysis (12,8)",
    content: [
      "Problem: Analyze received code 0x0EA and identify original message",
      "Given options: [0x5A, 0x3B, 0101101, 0xFA, 0xA2]"
    ],
    steps: [
      "1. Convert 0x0EA to binary:",
      "   0x0EA = 0000 1110 1010",
      "2. Check parity bits",
      "3. Extract message bits:",
      "   0101 1010 (0x5A)"
    ]
  },
  {
    title: "Exercise 2: Error Correction in Hamming Code",
    content: [
      "Problem: Analyze and correct received code 1011 1000 1110",
      "Given options: [0xCC, 0xF4, 0xC9, 0xC6, 0xD5]"
    ],
    steps: [
      "1. Convert to hex: 0xB8E",
      "2. Detect error at position 9",
      "3. Correct the error:",
      "   1011 1000 1110 → 1011 1000 1010",
      "4. Extract message: 1100 0110 (0xC6)"
    ]
  },
  // Add remaining slides here...
  {
    title: "Advanced Problem 15: Maximum CRC Burst Error Detection",
    content: [
      "Problem: Find maximum detectable burst error length",
      "Generator polynomial: G(x) = x⁴ + x³ + x + 1",
      "Determine error detection capability"
    ],
    steps: [
      "1. Analyze generator polynomial:",
      "   G(x) = x⁴ + x³ + x + 1",
      "   Binary: 11011",
      "2. Determine degree: r = 4",
      "3. Maximum burst length = r"
    ]
  }
];

const generatePowerPoint = () => {
  const pptx = new PptxGenJS();

  slidesData.forEach((slide, index) => {
    const pptSlide = pptx.addSlide();
    pptSlide.addText(`Slide ${index + 1}: ${slide.title}`, { x: 0.5, y: 0.5, fontSize: 18, bold: true });

    let yPosition = 1.5;
    slide.content.forEach((line) => {
      pptSlide.addText(line, { x: 0.5, y: yPosition, fontSize: 14 });
      yPosition += 0.4;
    });

    pptSlide.addText("Steps:", { x: 0.5, y: yPosition, fontSize: 16, bold: true });
    yPosition += 0.5;
    slide.steps.forEach((step) => {
      pptSlide.addText(step, { x: 0.5, y: yPosition, fontSize: 12 });
      yPosition += 0.4;
    });
  });

  // Use the new recommended writeFile syntax
  pptx.writeFile({ fileName: "SlidesPresentation.pptx" });
};

generatePowerPoint();
