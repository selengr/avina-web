export function TotalReport(props) {
  let scaleArrValueTextTop: any[] = [];
  let scaleArrValueTextMiddle: any[] = [];
  let scaleArrValueTextBottom: any[] = [];
  let scaleArrValueArray: any[] = [];
  let scalePie: any[] = [];
  let scaleTitle: any[] = [];
  let resultSegment = 1;
  let obj: any = {};
  const parent: any[] = [];

  if (props.transactionalLeadership == undefined && props.transformationalLeadership == undefined) {
    parent.push(props);
  } else {
    parent.push(props.transactionalLeadership);
    parent.push(props.transformationalLeadership);
  }
  Object.entries<any>(parent).forEach(([outerKey, outerValue]) => {
    Object.entries<any>(outerValue).forEach(([key, value]) => {
      if (value) {
        if (localStorage.complex === 'true') {
          Object.entries<any>(value).forEach(([innerKey, innerValue]) => {
            if (innerValue.presentation === 'title') {
              scaleTitle.push(innerValue);
            }
            if (innerValue.presentation === 'text') {
              switch (resultSegment) {
                case 1:
                  scaleArrValueTextTop.push(innerValue);
                  break;
                case 2:
                  scaleArrValueTextMiddle.push(innerValue);
                  break;
                case 3:
                  scaleArrValueTextBottom.push(innerValue);
                  break;
                default:
                  break;
              }
            } else {
              resultSegment++;
            }
            if (innerValue.presentation === 'pie') {
              scalePie.push(innerValue);
              localStorage.setItem(`${key}PieChart`, 'true');
            } else if (innerValue.presentation === 'arrayText') {
              scaleArrValueArray.push(innerValue);
            }
          });
        } else if (localStorage.complex === 'false') {
          Object.entries<any>(value).forEach(([innerKeyinnerKey, innerValue]) => {
            if (innerValue.presentation === 'title') {
              scaleTitle.push(innerValue);
            }
            if (innerValue.presentation === 'text') {
              switch (resultSegment) {
                case 2:
                  scaleArrValueTextTop.push(innerValue);
                  break;
                case 3:
                  scaleArrValueTextMiddle.push(innerValue);
                  break;
                case 4:
                  scaleArrValueTextBottom.push(innerValue);
                  break;
                default:
                  break;
              }
            } else {
              resultSegment++;
            }
            if (innerValue.presentation === 'pie') {
              scalePie.push(innerValue);
              localStorage.setItem(`${key}PieChart`, 'true');
            } else if (innerValue.presentation === 'arrayText') {
              scaleArrValueArray.push(innerValue);
            }
          });
        }
      }

      // localStorage.setItem(`${key}_Title`, JSON.stringify(scaleTitle));
      // localStorage.setItem(`${key}_Top`, JSON.stringify(scaleArrValueTextTop));
      // localStorage.setItem(`${key}_Middle`, JSON.stringify(scaleArrValueTextMiddle));
      // localStorage.setItem(`${key}_Bottom`, JSON.stringify(scaleArrValueTextBottom));
      // localStorage.setItem(`${key}_Pie`, JSON.stringify(scalePie[0]) ? JSON.stringify(scalePie[0]) : JSON.stringify([]));
      // localStorage.setItem(`${key}_Array`, JSON.stringify(scaleArrValue_Arrayext));
      const Title = `${key}_Title`;
      const Top = `${key}_Top`;
      const Middle = `${key}_Middle`;
      const Bottom = `${key}_Bottom`;
      const Pie = `${key}_Pie`;
      const Array = `${key}_Array`;

      obj = {
        ...obj,
        [Title]: scaleTitle,
        [Top]: scaleArrValueTextTop,
        [Middle]: scaleArrValueTextMiddle,
        [Bottom]: scaleArrValueTextBottom,
        [Pie]: scalePie[0] ? scalePie[0] : [],
        [Array]: scaleArrValueArray,
      };
      localStorage.setItem(`Report`, JSON.stringify(obj));
      resultSegment = 1;
      scaleArrValueTextTop = [];
      scaleArrValueTextMiddle = [];
      scaleArrValueTextBottom = [];
      scaleArrValueArray = [];
      scalePie = [];
      scaleTitle = [];
    });
  });
}
