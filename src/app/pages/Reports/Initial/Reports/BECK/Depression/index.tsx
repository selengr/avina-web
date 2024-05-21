export function DepressionReport(props) {
  const ReportData = {};
  if (props.cognitive) {
    const pieCognitiveData: any[] = [];
    if (JSON.parse(localStorage.Report).cognitive_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).cognitive_Pie.content).forEach(([key, value]) => {
        pieCognitiveData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['cognitivePieData'] = pieCognitiveData;
    localStorage.setItem('cognitivePieData', JSON.stringify(pieCognitiveData));
  }

  if (props.emotional) {
    const pieEmotionalData: any[] = [];
    if (JSON.parse(localStorage.Report).emotional_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).emotional_Pie.content).forEach(([key, value]) => {
        pieEmotionalData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['emotionalPieData'] = pieEmotionalData;
    localStorage.setItem('emotionalPieData', JSON.stringify(pieEmotionalData));
  }
}
