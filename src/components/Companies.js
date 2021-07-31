import React, {Component} from 'react'
import './CSS/companies.css'
import { Bar, Line, Pie } from 'react-chartjs-2';
const moneyFormat = (price) => {
    let numArray = Array.from(`${price}`)
    numArray.reverse()
    for(let i = 0; i < numArray.length; i++){
        let x = i % 4
        if(x === 0){
            numArray.splice(i, 0, ',')
        }
    }
    numArray.shift()
    numArray.reverse()
    let newPrice = numArray.join('')
    return newPrice
}
const percentageFormat = (percent) => {
    
    percent = percent * 100
    
    let finalPercent = Math.round(percent)


    return finalPercent
}

const Companies = (props) => {
    console.log(props)
    const {name, logo, cost, ownershipPercentage, impliedValue, founded} = props.companies
    let chartData = {
        labels: [`cost $${moneyFormat(cost)}`, `value $${moneyFormat(impliedValue)}`],
        datasets: 
        [{
            label: 'Cost vs Value',
            data: [cost, impliedValue],
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(255, 132, 132, 0.6)'],
            
        }]
    }
    return(
        <div className="companyContainer">
            <div className="companyBrand">
                <img className='companyImg' src={logo}/>
                <div className="companyFounded">Established {founded}</div>
            </div>
                <hr/>
            <div className="companyOwnershipPercent">{props.fundName} owns {percentageFormat(ownershipPercentage)}% of this company</div>
            <div className="companyInformation">
                <Bar
                    height={100}
	                data={chartData}
	                options={{}}
                />
            </div>
        </div>
    )

}


export default Companies