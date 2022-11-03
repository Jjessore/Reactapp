import React, {Component} from "react";
import BarChart from "../Charts/BarChart";
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js';
import {Bar} from 'react-chartjs-2';

class UserMIS extends Component {
    
    render() {
        return (
            <div className="UserMIS">
                <BarChart />
            </div>
        );
    }
    
}
  


export default UserMIS