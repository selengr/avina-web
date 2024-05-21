export function PieTotalChart(props) {
  if (props.total) {
    const pieTotalData: any[] = [];
    if (JSON.parse(localStorage.Report).total_Pie.content) {
      Object.entries<any>(JSON.parse(localStorage.Report).total_Pie.content).forEach(([key, value]) => {
        pieTotalData.push({ name: key, y: parseInt(value) });
      });
    }
    localStorage.setItem('totalPieData', JSON.stringify(pieTotalData));
  }
}
