import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Report from './Reports/core';
import * as Chart from './Charts/core';

export default function ReportResultStorage() {
  const result = JSON.parse(localStorage.reportResult);
  const ResultStorage = result.data.data.questionnaires[0].result;
  const navigate = useNavigate();

  const reportDataSet = () => {
    try {
      Report.TotalReport(ResultStorage);
      Report.BriefReport(ResultStorage);

      // -----------▼
      Report.AnxietyReport(ResultStorage);
      Report.DepressionReport(ResultStorage);
      Report.GHQReport(ResultStorage);
      Report.LuthansReport(ResultStorage);
      Report.IndividualismReport(ResultStorage);
      Report.HepnerReport(ResultStorage);
      Report.Scl90Report(ResultStorage);
      Report.CISSReport(ResultStorage);
      Report.SLSReport(ResultStorage);
      Report.ODQReport(ResultStorage);
      Report.OPQReport(ResultStorage);
      Report.OSIReport(ResultStorage);
      Report.GDMSReport(ResultStorage);
      Report.EOCReport(ResultStorage);
      Report.OCQReport(ResultStorage);
      Report.CMSReport(ResultStorage);
      Report.MLQCMLQEReport(ResultStorage);
      Report.QOLSReport(ResultStorage);
      Report.ASSReport(ResultStorage);
      Report.PID5BAReport(ResultStorage);
      // -----------▲

      Report.MBTIReport(ResultStorage);

      Chart.RadarChart();
      Chart.BarChart();
      Chart.LineChart();
      Chart.PieTotalChart(ResultStorage);
      navigate('/report/details', { replace: true });
    } catch (error) {
      // console.log(error);
      // localStorage.setItem('reportBack', 1);
      navigate('/report', { replace: true });
    }
  };
  useEffect(() => {
    reportDataSet();
  }, []);
  return null;
}
