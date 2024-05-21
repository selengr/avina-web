export function AnxietyReport(props) {
  if (props.ANS) {
    const pieANSData: any[] = [];
    if (JSON.parse(localStorage.Report).ANS_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).ANS_Pie.content).forEach(([key, value]) => {
        pieANSData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('ANSPieData', JSON.stringify(pieANSData));
  }

  if (props.neuropsychological) {
    const pieNeuropsychologicalData: any[] = [];
    if (JSON.parse(localStorage.Report).neuropsychological_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).neuropsychological_Pie.content).forEach(([key, value]) => {
        pieNeuropsychologicalData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('neuropsychologicalPieData', JSON.stringify(pieNeuropsychologicalData));
  }

  if (props.phobia) {
    const piePhobiaData: any[] = [];
    if (JSON.parse(localStorage.Report).phobia_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).phobia_Pie.content).forEach(([key, value]) => {
        piePhobiaData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('phobiaPieData', JSON.stringify(piePhobiaData));
  }

  if (props.mental) {
    const pieMentalData: any[] = [];
    if (JSON.parse(localStorage.Report).mental_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).mental_Pie.content).forEach(([key, value]) => {
        pieMentalData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('mentalPieData', JSON.stringify(pieMentalData));
  }
}
