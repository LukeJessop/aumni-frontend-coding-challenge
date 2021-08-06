import React from 'react'
import './CSS/companies.css'
import {Bar} from 'react-chartjs-2';

const formatMoney = (price) => {
    return price.toLocaleString()
}

const toPercent = (percent) => {
    return Math.round(percent * 100)
}

const Companies = (props) => {
    const {logo, cost, ownershipPercentage, impliedValue, founded} = props.companies
    let chartData = {
        labels: [`cost $${formatMoney(cost)}`, `value $${formatMoney(impliedValue)}`],
        datasets: 
        [{
            label: 'Cost vs Value',
            data: [cost, impliedValue],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(255, 132, 132, 0.6)'],
            
        }]
    }
    return(
        <div className="company-container">
            <div className="company-brand">
                <img className='company-img' src={logo}/>
                <div className="company-founded">Established {founded}</div>
            </div>
                <hr/>
            <div className="company-ownership-percent">{props.fundName} owns {toPercent(ownershipPercentage)}% of this company</div>
            <div className="company-information">
                <Bar
                    height={100}
	                data={chartData}
                />
            </div>
        </div>
    )

}


export default Companies