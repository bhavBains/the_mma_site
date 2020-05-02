// var React = require("react");
// var Component = React.Component;
// var CanvasJSReact = require("../lib/canvasjs.react");
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// class PieChart extends Component {
//   render() {
//     const options = {
//       exportEnabled: true,
//       animationEnabled: true,
//       title: {
//         text: "WIN %",
//       },
//       data: [
//         {
//           type: "pie",
//           startAngle: 75,
//           toolTipContent: "<b>{label}</b>: {y}%",
//           showInLegend: "true",
//           legendText: "{label}",
//           indexLabelFontSize: 16,
//           indexLabel: "{label} - {y}%",
//           dataPoints: [
//             { y: 18, label: "KO" },
//             { y: 49, label: "SUBMISSIONS" },
//             { y: 9, label: "STOPPAGE" },
//             { y: 5, label: "Referral" },
//             { y: 19, label: "Social" },
//           ],
//         },
//       ],
//     };
//     return (
//       <div>
//         <CanvasJSChart
//           options={options}
//           /* onRef={ref => this.chart = ref} */
//         />
//         {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//       </div>
//     );
//   }
// }
// module.exports = PieChart;
