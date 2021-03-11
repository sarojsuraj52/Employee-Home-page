
const mediaQuery = window.matchMedia('(max-width: 768px)')

// Check if the media query is true
if (mediaQuery.matches) {
    // Then trigger an alert
    alert('Please use Destop to View Site');
    document.body.style.display = "none";

}
const mediaQuery2 = window.matchMedia('(max-width: 420px)')

// Check if the media query is true
if (mediaQuery.matches) {
    // Then trigger an alert
    alert('Please use Destop to View Site');
    document.body.style.display = "none";
}

window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
        {
            title: {
                text: "Contributions Overtime",
                horizontalAlign: "left",
                fontSize: 13,
                fontWeight: "lighter",
                fontStyle: "normal"
            },
            axisY: {
                prefix: "$",
                maximum: 300
            },
            axisX: {

                interval: 5,
                intervalType: "Number"

            },
            legend: {
                horizontalAlign: "left", // "center" , "right"
                verticalAlign: "top",  // "top" , "bottom"
                fontSize: 10
            },
            dataPointWidth: 20,
            data: [
                {
                    color: "#0701a2",
                    type: "stackedColumn",
                    legendText: "Employer: k 73,500",
                    showInLegend: "true",
                    dataPoints: [
                        { x: 20, y: 15 },
                        { x: 25, y: 20 },
                        { x: 30, y: 25 },
                        { x: 35, y: 35 },
                        { x: 40, y: 45 },
                        { x: 45, y: 55 },
                        { x: 50, y: 65 },
                        { x: 55, y: 75 },
                        { x: 60, y: 85 },
                        { x: 65, y: 95 }

                    ]
                },
                {
                    color: "#4834fe",
                    type: "stackedColumn",
                    legendText: "snacks",
                    showInLegend: "Employee: k 52,500",
                    dataPoints: [
                        { x: 20, y: 20 },
                        { x: 25, y: 25 },
                        { x: 30, y: 30 },
                        { x: 35, y: 40 },
                        { x: 40, y: 50 },
                        { x: 45, y: 60 },
                        { x: 50, y: 70 },
                        { x: 55, y: 80 },
                        { x: 60, y: 90 },
                        { x: 65, y: 100 }

                    ]
                },
                {
                    color: "#84aefe",
                    type: "stackedColumn",
                    legendText: "Total Interest: k 244,313",
                    showInLegend: "true",
                    dataPoints: [
                        { x: 20, y: 25 },
                        { x: 25, y: 30 },
                        { x: 30, y: 40 },
                        { x: 35, y: 50 },
                        { x: 40, y: 60 },
                        { x: 45, y: 70 },
                        { x: 50, y: 80 },
                        { x: 55, y: 90 },
                        { x: 60, y: 100 },
                        { x: 65, y: 110 }

                    ]
                },



            ]
        });

    chart.render();



    var chart2 = new CanvasJS.Chart("chartContainer2",
        {
            title: {
                text: "78%",
                verticalAlign: "center",
                dockInsidePlotArea: true,
                fontSize: 10,
            },
            data: [
                {

                    radius: "85%",
                    innerRadius: "80%",
                    type: "doughnut",
                    startAngle: 180,
                    dataPoints: [
                        { y: 22, color: "#d3f6ee", },
                        { y: 78, color: "#21d5a9", },


                    ]
                }
            ]
        });

    chart2.render();

    var chart3 = new CanvasJS.Chart("chartContainer3",
        {
            title: {
                text: "95%",
                verticalAlign: "center",
                dockInsidePlotArea: true,
                fontSize: 10,
            },
            data: [
                {

                    radius: "85%",
                    innerRadius: "80%",
                    type: "doughnut",
                    startAngle: 240,
                    dataPoints: [
                        { y: 5, color: "#d3f6ee", },
                        { y: 95, color: "#21d5a9", },


                    ]
                }
            ]
        });

    chart3.render();


    var chart4 = new CanvasJS.Chart("chartContainer4",
        {
            title: {
                text: "59%",
                verticalAlign: "center",
                dockInsidePlotArea: true,
                fontSize: 10,
            },
            data: [
                {

                    radius: "85%",
                    innerRadius: "80%",
                    type: "doughnut",
                    startAngle: 130,
                    dataPoints: [
                        { y: 41, color: "#d3f6ee", },
                        { y: 59, color: "#21d5a9", },


                    ]
                }
            ]
        });

    chart4.render();
}
