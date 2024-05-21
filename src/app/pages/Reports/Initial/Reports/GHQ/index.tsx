export function GHQReport(props) {
  if (props.psychosomatic) {
    const piePsychosomaticData: any[] = [];
    if (JSON.parse(localStorage.Report).psychosomatic_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).psychosomatic_Pie.content).forEach(([key, value]) => {
        piePsychosomaticData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('psychosomaticPieData', JSON.stringify(piePsychosomaticData));
  }

  if (props.anxietyAndSleepDisorder) {
    const pieAnxietyAndSleepDisorderData: any[] = [];
    if (JSON.parse(localStorage.Report).anxietyAndSleepDisorder_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).anxietyAndSleepDisorder_Pie.content).forEach(([key, value]) => {
        pieAnxietyAndSleepDisorderData.push({
          name: key,
          y: parseInt(value),
        });
      });
    }
    localStorage.setItem('anxietyAndSleepDisorderPieData', JSON.stringify(pieAnxietyAndSleepDisorderData));
  }

  if (props.socialPerformanceDisorder) {
    const pieSocialPerformanceDisorderData: any[] = [];
    if (JSON.parse(localStorage.Report).socialPerformanceDisorder_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).socialPerformanceDisorder_Pie.content).forEach(([key, value]) => {
        pieSocialPerformanceDisorderData.push({
          name: key,
          y: parseInt(value),
        });
      });
    }
    localStorage.setItem('socialPerformanceDisorderPieData', JSON.stringify(pieSocialPerformanceDisorderData));
  }

  if (props.depression) {
    const pieDepressionData: any[] = [];
    if (JSON.parse(localStorage.Report).depression_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).depression_Pie.content).forEach(([key, value]) => {
        pieDepressionData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('depressionPieData', JSON.stringify(pieDepressionData));
  }
}
