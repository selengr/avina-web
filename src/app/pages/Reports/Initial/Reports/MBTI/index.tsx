export function MBTIReport(props) {
  if (props.full) {
    const MBTIFullArrValue: any[] = [];
    Object.entries<any>(props.full).forEach(([key, value]) => {
      MBTIFullArrValue.push(value);
    });
    localStorage.setItem('isMBTIFull', JSON.stringify([{ option: true }]));
    localStorage.setItem('MBTIFull', JSON.stringify(MBTIFullArrValue));
  } else {
    localStorage.setItem('MBTIFull', JSON.stringify([{}]));
    localStorage.setItem('isMBTIFull', JSON.stringify([{ option: false }]));
  }
}
