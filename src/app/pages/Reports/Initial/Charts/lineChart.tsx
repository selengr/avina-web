export function LineChart() {
  if (localStorage.lineChartData) {
    const lineLabel: any[] = [];
    const lineValue: any[] = [];
    const lineContent: any[] = [];
    Object.entries(JSON.parse(localStorage.lineChartData).content).forEach(([key, value]) => {
      lineContent.push(value);
    });
    for (let i = 0; i < lineContent.length; i++) {
      lineLabel.push(lineContent[i].categories);
      lineValue.push(lineContent[i].data);
    }
    localStorage.setItem('lineChartValue', JSON.stringify(lineValue));
    localStorage.setItem('lineChartLabel', JSON.stringify(lineLabel));
    // setlineChartValue(1)
  }
}
