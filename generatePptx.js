const PptxGenJS = require("pptxgenjs");

// Extracted slides data from React code
const slides = [
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
  {
    title: "Exercise 3: CRC Error Detection",
    content: [
      "Problem: Verify codeword 1100101 with G = 1001",
      "Determine if codeword is correct, corrupted, or incomplete"
    ],
    steps: [
      "1. Polynomial Division:",
      "   Dividend: 1100101",
      "   Divisor:  1001 (G)",
      "2. Check Remainder:",
      "   Remainder ≠ 0",
      "3. Conclusion: Corrupted bits detected"
    ]
  },
  {
    title: "Exercise 4: Message Encoding with Generator Polynomial",
    content: [
      "Problem: Encode message M=0x9D using G=11001",
      "Find the correctly received codeword"
    ],
    steps: [
      "1. Convert M to binary:",
      "   0x9D = 1001 1101",
      "2. Append zeros (degree of G):",
      "   1001 1101 0000",
      "3. Calculate remainder using polynomial division",
      "4. Append remainder to original message"
    ]
  },
  {
    title: "Exercise 5: Cross Parity Encoding",
    content: [
      "Problem: Encode decimal digits 4-9 using Excess-3 code",
      "Apply cross parity for error detection"
    ],
    steps: [
      "1. Excess-3 Encoding:",
      "   4 → 0111",
      "   5 → 1000",
      "   6 → 1001",
      "   7 → 1010",
      "   8 → 1011",
      "   9 → 1100"
    ]
  },
  {
    title: "Exercise 6: Cross Parity Verification",
    content: [
      "Problem: Verify sequence (010111101011111101000101)₂",
      "Using even cross parity encoding"
    ],
    steps: [
      "1. Arrange bits in grid (6-bit blocks)",
      "2. Check row parity",
      "3. Check column parity",
      "4. Identify any discrepancies"
    ]
  },
  {
    title: "Exercise 7: Linear Block Code Feasibility",
    content: [
      "Problem: Analyze feasibility of (20,16) linear block code",
      "for single error correction"
    ],
    steps: [
      "1. Check feasibility criterion:",
      "   2^(n-k) ≥ n + 1",
      "2. Calculate:",
      "   2^(20-16) = 2^4 = 16",
      "   n + 1 = 20 + 1 = 21",
      "3. Compare: 16 < 21"
    ]
  },
  {
    title: "Exercise 8: Maximum Error Correction",
    content: [
      "Problem: Calculate maximum correctable errors",
      "Given: n=63, k=57"
    ],
    steps: [
      "1. For single-error correction:",
      "   Minimum Hamming distance d = 3",
      "2. Calculate max correctable errors:",
      "   t = ⌊(d-1)/2⌋ = 1"
    ]
  },
  {
    title: "Advanced Problem 1: Double-Error Detection",
    content: [
      "Problem: Determine minimum Hamming distance for:",
      "- Double-bit error detection",
      "- Single-error correction with double-error detection",
      "Given: n=15, k=11, r=4"
    ],
    steps: [
      "1. For double-error detection:",
      "   dmin ≥ t + 1 = 3",
      "2. For single correction + double detection:",
      "   dmin ≥ 2e + t + 1 = 5"
    ]
  },
  {
    title: "Advanced Problem 2: Syndrome Calculation",
    content: [
      "Problem: Calculate syndrome for Hamming(7,4) code",
      "Received codeword: 1011101",
      "Find and correct any errors"
    ],
    steps: [
      "1. Parity-Check Matrix H:",
      "   [1 1 1 0 1 0 0]",
      "   [1 0 0 1 1 0 1]",
      "   [0 1 0 1 0 1 1]",
      "2. Calculate S = rHᵀ",
      "3. Error position from syndrome: 5",
      "4. Correct the error"
    ]
  },
  {
    title: "Advanced Problem 3: CRC Verification",
    content: [
      "Problem: Verify transmitted codeword using CRC",
      "Message M = 1101, G(x) = x³ + x + 1",
      "Transmitted: 11010111",
      "Received: 11000111"
    ],
    steps: [
      "1. Convert G(x) to binary: 1011",
      "2. Divide received code by G(x)",
      "3. Check remainder",
      "4. Locate and correct error"
    ]
  },
  {
    title: "Advanced Problem 4: Double-Error Correction Feasibility",
    content: [
      "Problem: Determine feasibility of double-error correction",
      "Given: n=15, k=9"
    ],
    steps: [
      "1. Check criterion:",
      "   2^(n-k) ≥ 1 + n + n(n-1)/2",
      "2. Calculate:",
      "   2^(15-9) = 2^6 = 64",
      "   1 + 15 + 15(14)/2 = 121",
      "3. Compare: 64 < 121"
    ]
  },
  {
    title: "Advanced Problem 5: Maximum CRC Burst Error Detection",
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
  },
  {
    title: "Advanced Problem 6: EAN-13 Barcode Verification",
    content: [
      "Problem: Verify EAN-13 barcode 6291041500213",
      "Calculate and verify check digit"
    ],
    steps: [
      "1. Weight digits alternately by 1 and 3:",
      "   6×1 + 2×3 + 9×1 + 1×3 + 0×1 + 4×3 + ",
      "   1×1 + 5×3 + 0×1 + 0×3 + 2×1 + 1×3 = 82",
      "2. Calculate check digit:",
      "   10 - (82 mod 10) = 8",
      "3. Compare with given check digit (3)"
    ]
  },
  {
    title: "Advanced Problem 7: QR Code Error Correction",
    content: [
      "Problem: Analyze QR code with Level L (7%) recovery",
      "Message: 'HELLO' with 2 damaged bytes",
      "Determine recoverability"
    ],
    steps: [
      "1. Analyze error correction capacity:",
      "   Level L = 7% recovery",
      "2. Assess damage:",
      "   2 bytes damaged",
      "3. Check recoverability"
    ]
  }
];

const generatePowerPoint = () => {
  const pptx = new PptxGenJS();

  slides.forEach((slide, index) => {
    const pptSlide = pptx.addSlide();
    pptSlide.addText(slide.title, { x: 0.5, y: 0.5, fontSize: 24, bold: true });

    let yPosition = 1.5;
    slide.content.forEach((line) => {
      pptSlide.addText(line, { x: 0.5, y: yPosition, fontSize: 16 });
      yPosition += 0.5;
    });

    pptSlide.addText("Steps:", { x: 0.5, y: yPosition, fontSize: 20, bold: true });
    yPosition += 0.5;
    slide.steps.forEach((step) => {
      pptSlide.addText(step, { x: 0.5, y: yPosition, fontSize: 14 });
      yPosition += 0.4;
    });
  });

  pptx.writeFile({ fileName: "CompleteSlidesPresentation.pptx" });
};

generatePowerPoint();
