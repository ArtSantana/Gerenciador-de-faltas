
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


	function Graphs(){
         const options = {
          title: {
            text: "Faltas por disciplina"
          },
          data: [{				
                    type: "bar",
                    dataPoints: 
                    [
                        { label: "Estruturas de dados",  y: 10  }
 
                    ]
           }]
       }


    return(

		<div className = "Graph-demo">
			  <CanvasJSChart options = {options}
			/>
			
		</div>

    );
}
export default Graphs;