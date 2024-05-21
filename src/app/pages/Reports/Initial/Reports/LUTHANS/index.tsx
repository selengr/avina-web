export function LuthansReport(props) {
  if (props.optimism) {
    const pieOptimismData: any[] = [];
    if (JSON.parse(localStorage.Report).optimism_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).optimism_Pie.content).forEach(([key, value]) => {
        pieOptimismData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('optimismPieData', JSON.stringify(pieOptimismData));
  }

  if (props.efficacy) {
    const pieEfficacyData: any[] = [];
    if (JSON.parse(localStorage.Report).efficacy_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).efficacy_Pie.content).forEach(([key, value]) => {
        pieEfficacyData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('efficacyPieData', JSON.stringify(pieEfficacyData));
  }

  if (props.hope) {
    const pieHopeData: any[] = [];
    if (JSON.parse(localStorage.Report).hope_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).hope_Pie.content).forEach(([key, value]) => {
        pieHopeData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('hopePieData', JSON.stringify(pieHopeData));
  }

  if (props.resilience) {
    const pieResilienceData: any[] = [];
    if (JSON.parse(localStorage.Report).resilience_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).resilience_Pie.content).forEach(([key, value]) => {
        pieResilienceData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('resiliencePieData', JSON.stringify(pieResilienceData));
  }
}
