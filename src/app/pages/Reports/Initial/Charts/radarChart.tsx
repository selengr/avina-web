export function RadarChart() {
  if (localStorage.radarChartData) {
    const radarContent: any[] = [];
    const radarKey: any[] = [];
    Object.entries(JSON.parse(localStorage.radarChartData).content).forEach(([key, value]) => {
      radarContent.push(value);
      radarKey.push(key);
    });
    localStorage.setItem('radarChartValue', JSON.stringify(radarContent));
    localStorage.setItem('radarChartLabel', JSON.stringify(radarKey));
  }
}
