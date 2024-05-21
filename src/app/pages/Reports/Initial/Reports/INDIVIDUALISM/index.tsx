export function IndividualismReport(props) {
  if (props.horizontal_individualism) {
    const pieHorizontalIndividualismData: any[] = [];
    if (JSON.parse(localStorage.Report).horizontal_individualism_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).horizontal_individualism_Pie.content).forEach(([key, value]) => {
        pieHorizontalIndividualismData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('horizontalIndividualismPieData', JSON.stringify(pieHorizontalIndividualismData));
  }

  if (props.vertical_individualism) {
    const pieVerticalIndividualismData: any[] = [];
    if (JSON.parse(localStorage.Report).vertical_individualism_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).vertical_individualism_Pie.content).forEach(([key, value]) => {
        pieVerticalIndividualismData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('verticalIndividualismPieData', JSON.stringify(pieVerticalIndividualismData));
  }

  if (props.horizontal_collectivism) {
    const pieHorizontalCollectivismData: any[] = [];
    if (JSON.parse(localStorage.Report).horizontal_collectivism_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).horizontal_collectivism_Pie.content).forEach(([key, value]) => {
        pieHorizontalCollectivismData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('horizontalCollectivismPieData', JSON.stringify(pieHorizontalCollectivismData));
  }

  if (props.vertical_collectivism) {
    const pieVerticalCollectivismData: any[] = [];
    if (JSON.parse(localStorage.Report).vertical_collectivism_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).vertical_collectivism_Pie.content).forEach(([key, value]) => {
        pieVerticalCollectivismData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('verticalCollectivismPieData', JSON.stringify(pieVerticalCollectivismData));
  }
}
