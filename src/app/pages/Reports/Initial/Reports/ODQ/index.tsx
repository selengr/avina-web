export function ODQReport(props) {
  const ReportData = {};
  if (props.purposes) {
    const piePurposesData: any[] = [];
    if (JSON.parse(localStorage.Report).purposes_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).purposes_Pie.content).forEach(([key, value]) => {
        piePurposesData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['purposesPieData'] = piePurposesData;
    localStorage.setItem('purposesPieData', JSON.stringify(piePurposesData));
  }

  if (props.structure) {
    const pieStructureData: any[] = [];
    if (JSON.parse(localStorage.Report).structure_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).structure_Pie.content).forEach(([key, value]) => {
        pieStructureData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['structurePieData'] = pieStructureData;
    localStorage.setItem('structurePieData', JSON.stringify(pieStructureData));
  }

  if (props.leadership) {
    const pieLeadershipData: any[] = [];
    if (JSON.parse(localStorage.Report).leadership_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).leadership_Pie.content).forEach(([key, value]) => {
        pieLeadershipData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['leadershipPieData'] = pieLeadershipData;
    localStorage.setItem('leadershipPieData', JSON.stringify(pieLeadershipData));
  }
  if (props.relationships) {
    const pieRelationshipsData: any[] = [];
    if (JSON.parse(localStorage.Report).relationships_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).relationships_Pie.content).forEach(([key, value]) => {
        pieRelationshipsData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['relationshipsPieData'] = pieRelationshipsData;
    localStorage.setItem('relationshipsPieData', JSON.stringify(pieRelationshipsData));
  }
  if (props.rewards) {
    const pieRewardsData: any[] = [];
    if (JSON.parse(localStorage.Report).rewards_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).rewards_Pie.content).forEach(([key, value]) => {
        pieRewardsData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['rewardsPieData'] = pieRewardsData;
    localStorage.setItem('rewardsPieData', JSON.stringify(pieRewardsData));
  }
  if (props.helpfulMechanisms) {
    const pieHelpfulMechanismsData: any[] = [];
    if (JSON.parse(localStorage.Report).helpfulMechanisms_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).helpfulMechanisms_Pie.content).forEach(([key, value]) => {
        pieHelpfulMechanismsData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['helpfulMechanismsPieData'] = pieHelpfulMechanismsData;
    localStorage.setItem('helpfulMechanismsPieData', JSON.stringify(pieHelpfulMechanismsData));
  }
  if (props.attitudesForChange) {
    const pieAttitudesForChangeData: any[] = [];
    if (JSON.parse(localStorage.Report).attitudesForChange_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).attitudesForChange_Pie.content).forEach(([key, value]) => {
        pieAttitudesForChangeData.push({ name: key, y: parseInt(value) });
      });
    }
    ReportData['attitudesForChangePieData'] = pieAttitudesForChangeData;
    localStorage.setItem('attitudesForChangePieData', JSON.stringify(pieAttitudesForChangeData));
  }
}
