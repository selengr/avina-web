export function EOCReport(props) {
  const ReportData = {};

  if (props.multiple_communication_modalities) {
    const pieMultiple_communication_modalitiesData: any[] = [];
    if (JSON.parse(localStorage.Report).multiple_communication_modalities_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).multiple_communication_modalities_Pie.content).forEach(([key, value]) => {
        pieMultiple_communication_modalitiesData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['multiple_communication_modalitiesPieData'] = pieMultiple_communication_modalitiesData;
    localStorage.setItem('multiple_communication_modalitiesPieData', JSON.stringify(pieMultiple_communication_modalitiesData));
  }

  if (props.simplifiction) {
    const pieSimplifictionData: any[] = [];
    if (JSON.parse(localStorage.Report).simplifiction_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).simplifiction_Pie.content).forEach(([key, value]) => {
        pieSimplifictionData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['simplifictionPieData'] = pieSimplifictionData;
    localStorage.setItem('simplifictionPieData', JSON.stringify(pieSimplifictionData));
  }

  if (props.active_listening) {
    const pieActive_listeningData: any[] = [];
    if (JSON.parse(localStorage.Report).active_listening_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).active_listening_Pie.content).forEach(([key, value]) => {
        pieActive_listeningData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['active_listeningPieData'] = pieActive_listeningData;
    localStorage.setItem('active_listeningPieData', JSON.stringify(pieActive_listeningData));
  }
  if (props.emotional_controll) {
    const pieEmotional_controllgData: any[] = [];
    if (JSON.parse(localStorage.Report).emotional_controll_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).emotional_controll_Pie.content).forEach(([key, value]) => {
        pieEmotional_controllgData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['emotional_controllPieData'] = pieEmotional_controllgData;
    localStorage.setItem('emotional_controllPieData', JSON.stringify(pieEmotional_controllgData));
  }
  if (props.feedback_utilization) {
    const pieFeedback_utilizationData: any[] = [];
    if (JSON.parse(localStorage.Report).feedback_utilization_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).feedback_utilization_Pie.content).forEach(([key, value]) => {
        pieFeedback_utilizationData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['feedback_utilizationPieData'] = pieFeedback_utilizationData;
    localStorage.setItem('feedback_utilizationPieData', JSON.stringify(pieFeedback_utilizationData));
  }

  if (props.non_verbal_communication) {
    const pieNon_verbal_communicationData: any[] = [];
    if (JSON.parse(localStorage.Report).non_verbal_communication_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).non_verbal_communication_Pie.content).forEach(([key, value]) => {
        pieNon_verbal_communicationData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['non_verbal_communicationPieData'] = pieNon_verbal_communicationData;
    localStorage.setItem('non_verbal_communicationPieData', JSON.stringify(pieNon_verbal_communicationData));
  }
}
