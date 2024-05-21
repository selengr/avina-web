export function MLQCMLQEReport(props) {
  const ReportData = {};
  if (props.ideal_features) {
    const pieIdeal_featuresData: any[] = [];
    if (JSON.parse(localStorage.Report).ideal_features_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).ideal_features_Pie.content).forEach(([key, value]) => {
        pieIdeal_featuresData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['ideal_featuresPieData'] = pieIdeal_featuresData;
    localStorage.setItem('ideal_featuresPieData', JSON.stringify(pieIdeal_featuresData));
  }

  if (props.ideal_behaviors) {
    const pieIdeal_behaviorsData: any[] = [];
    if (JSON.parse(localStorage.Report).ideal_behaviors_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).ideal_behaviors_Pie.content).forEach(([key, value]) => {
        pieIdeal_behaviorsData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['ideal_behaviorsPieData'] = pieIdeal_behaviorsData;
    localStorage.setItem('ideal_behaviorsPieData', JSON.stringify(pieIdeal_behaviorsData));
  }

  if (props.mental_motivation) {
    const pieMental_motivationData: any[] = [];
    if (JSON.parse(localStorage.Report).mental_motivation_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).mental_motivation_Pie.content).forEach(([key, value]) => {
        pieMental_motivationData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['mental_motivationPieData'] = pieMental_motivationData;
    localStorage.setItem('mental_motivationPieData', JSON.stringify(pieMental_motivationData));
  }

  if (props.inspirational_motivation) {
    const pieInspirational_motivationData: any[] = [];
    if (JSON.parse(localStorage.Report).inspirational_motivation_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).inspirational_motivation_Pie.content).forEach(([key, value]) => {
        pieInspirational_motivationData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['inspirational_motivationPieData'] = pieInspirational_motivationData;
    localStorage.setItem('inspirational_motivationPieData', JSON.stringify(pieInspirational_motivationData));
  }

  if (props.individualized_attention) {
    const pieIndividualized_attentionData: any[] = [];
    if (JSON.parse(localStorage.Report).individualized_attention_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).individualized_attention_Pie.content).forEach(([key, value]) => {
        pieIndividualized_attentionData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['individualized_attentionPieData'] = pieIndividualized_attentionData;
    localStorage.setItem('individualized_attentionPieData', JSON.stringify(pieIndividualized_attentionData));
  }

  if (props.contingent_rewards) {
    const pieContingent_rewardsData: any[] = [];
    if (JSON.parse(localStorage.Report).contingent_rewards_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).contingent_rewards_Pie.content).forEach(([key, value]) => {
        pieContingent_rewardsData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['contingent_rewardsPieData'] = pieContingent_rewardsData;
    localStorage.setItem('contingent_rewardsPieData', JSON.stringify(pieContingent_rewardsData));
  }

  if (props.active_management) {
    const pieActive_managementData: any[] = [];
    if (JSON.parse(localStorage.Report).active_management_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).active_management_Pie.content).forEach(([key, value]) => {
        pieActive_managementData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['active_managementPieData'] = pieActive_managementData;
    localStorage.setItem('active_managementPieData', JSON.stringify(pieActive_managementData));
  }

  if (props.passive_management) {
    const piePassive_managementData: any[] = [];
    if (JSON.parse(localStorage.Report).passive_management_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).passive_management_Pie.content).forEach(([key, value]) => {
        piePassive_managementData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['passive_managementPieData'] = piePassive_managementData;
    localStorage.setItem('passive_managementPieData', JSON.stringify(piePassive_managementData));
  }

  if (props.no_intervention) {
    const pieNo_interventionData: any[] = [];
    if (JSON.parse(localStorage.Report).no_intervention_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).no_intervention_Pie.content).forEach(([key, value]) => {
        pieNo_interventionData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['no_interventionPieData'] = pieNo_interventionData;
    localStorage.setItem('no_interventionPieData', JSON.stringify(pieNo_interventionData));
  }
}
