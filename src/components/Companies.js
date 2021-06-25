import React, {Component} from 'react'
import './CSS/companies.css'

const Companies = (props) => {
    const {name, logo, cost, ownershipPercentage, impliedValue, founded} = props.companies
    
    let cost2 = ''
    let impliedVal2 = ''
    let ownershipPercentage2 = ''

    const moneyFormat = (price) => {
        let numArray = Array.from(`${price}`)
        numArray.reverse()
        for(let i = 0; i < numArray.length; i++){
            let x = i % 4
            if(x === 0){
                console.log(i)
                numArray.splice(i, 0, ',')
            }
        }
        numArray.shift()
        numArray.reverse()
        cost2 = numArray.join("")
    }

    const moneyFormat2 = (price) => {
        let numArray = Array.from(`${price}`)
        numArray.reverse()
        for(let i = 0; i < numArray.length; i++){
            let x = i % 4
            if(x === 0){
                console.log(i)
                numArray.splice(i, 0, ',')
            }
        }
        numArray.shift()
        numArray.reverse()
        impliedVal2 = numArray.join("")
    }

    const percentageFormat = (percent) => {
        percent = percent * 100
        ownershipPercentage2 = percent
    }


    return(
        <div className="companyContainer">
            <div className="companyName">Company: {name}</div>
            <img className='companyImg' src={logo}/>
            {moneyFormat(cost)}
            <div className="companyCost">Cost: ${cost2}</div>
            {percentageFormat(ownershipPercentage)}
            <div className="companyOwnershipPercent">Ownership Percentage: {ownershipPercentage2}%</div>
            {moneyFormat2(impliedValue)}
            <div className="companyValue">Implied Value: ${impliedVal2}</div>
            <div className="companyFounded">Founded: {founded}</div>
        </div>
    )

}


export default Companies