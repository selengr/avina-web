export function CISSReport(props) {
  const ReportData = {};
  if (props.task_oriented_strategy) {
    const pieTask_oriented_strategyData: any[] = [];
    if (JSON.parse(localStorage.Report).task_oriented_strategy_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).task_oriented_strategy_Pie.content).forEach(([key, value]) => {
        pieTask_oriented_strategyData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['task_oriented_strategyPieData'] = pieTask_oriented_strategyData;
    localStorage.setItem('task_oriented_strategyPieData', JSON.stringify(pieTask_oriented_strategyData));
  }

  if (props.emotion_oriented_strategy) {
    const pieEmotion_oriented_strategyData: any[] = [];
    if (JSON.parse(localStorage.Report).emotion_oriented_strategy_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).emotion_oriented_strategy_Pie.content).forEach(([key, value]) => {
        pieEmotion_oriented_strategyData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['emotion_oriented_strategyPieData'] = pieEmotion_oriented_strategyData;
    localStorage.setItem('emotion_oriented_strategyPieData', JSON.stringify(pieEmotion_oriented_strategyData));
  }

  if (props.avoidance_oriented_strategy) {
    const pieAvoidance_oriented_strategyData: any[] = [];
    if (JSON.parse(localStorage.Report).avoidance_oriented_strategy_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).avoidance_oriented_strategy_Pie.content).forEach(([key, value]) => {
        pieAvoidance_oriented_strategyData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['avoidance_oriented_strategyPieData'] = pieAvoidance_oriented_strategyData;
    localStorage.setItem('avoidance_oriented_strategyPieData', JSON.stringify(pieAvoidance_oriented_strategyData));
  }
}
