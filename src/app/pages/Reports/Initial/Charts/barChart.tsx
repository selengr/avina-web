export function BarChart() {
  if (localStorage.barChartData) {
    const barLabel: any[] = [];
    const barValue: any[] = [];
    const barContent: any[] = [];
    Object.entries(JSON.parse(localStorage.barChartData).content).forEach(([key, value]) => {
      barContent.push(value);
    });
    for (let i = 0; i < barContent.length; i++) {
      barLabel.push(barContent[i].label);
      barValue.push(barContent[i].value);
    }
    localStorage.setItem('barChartValue', JSON.stringify(barValue));
    localStorage.setItem('barChartLabel', JSON.stringify(barLabel));
    // setBarChartValue(1)
  }
}
