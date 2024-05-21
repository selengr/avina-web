export function HepnerReport(props) {
  if (props.problem_solving_confidence) {
    const pieProblemSolvingConfidenceData: any[] = [];
    if (JSON.parse(localStorage.Report).problem_solving_confidence_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).problem_solving_confidence_Pie.content).forEach(([key, value]) => {
        pieProblemSolvingConfidenceData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('problemSolvingConfidencePieData', JSON.stringify(pieProblemSolvingConfidenceData));
  }

  if (props.approach_avoidance_style) {
    const pieApproachAvoidanceStyleData: any[] = [];
    if (JSON.parse(localStorage.Report).approach_avoidance_style_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).approach_avoidance_style_Pie.content).forEach(([key, value]) => {
        pieApproachAvoidanceStyleData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('approachAvoidanceStylePieData', JSON.stringify(pieApproachAvoidanceStyleData));
  }

  if (props.personal_control) {
    const piePersonalControlData: any[] = [];
    if (JSON.parse(localStorage.Report).personal_control_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).personal_control_Pie.content).forEach(([key, value]) => {
        piePersonalControlData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('personalControlPieData', JSON.stringify(piePersonalControlData));
  }
}
