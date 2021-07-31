import React, {Component} from 'react'
import funds from '../mocks/funds.json'
import Companies from './Companies'
import './CSS/funds.css'
import {Pie, Doughnut, Bar} from 'react-chartjs-2'

class Funds extends Component {
    constructor(){
        super()
        this.state={
            funds: funds,
            clickedFundId: '',
            clickedCompanyId: ''
        }
    }

    render(){
        const fundsArray = this.state.funds.map((fund) => 
        <div className="fundContainer">
            <div className='fund' onClick={() => {
                if(this.state.clickedFundId !== fund.id){
                    this.setState({
                        clickedFundId: fund.id
                    })
                }else if(this.state.clickedFundId === fund.id){
                    this.setState({
                        clickedFundId: ''
                    })
                }
            }}>
                <div className='fundName'>{fund.name}</div>
            </div>

                {fund.companies.map((company) => 
                    {if(fund.id === this.state.clickedFundId){
                        return(
                            <div className="companyList" onClick={() =>
                                {
                                    if(this.state.clickedCompanyId !== company.id){
                                        this.setState({
                                            clickedCompanyId: company.id
                                        })
                                    }
                                }
                            }>
                                <h3>{company.name}</h3>
                            </div>
                            )
                    }})}

        </div>
        )

        const companyArray = this.state.funds.map((fund) =>
            <div>
                {fund.companies.map((company) => 
                        {if(company.id === this.state.clickedCompanyId){
                            return(
                                <Companies key={company.id} companies={company} fundName={fund.name}/>
                            )
                        }}
                )}

            </div>
            
        )
        return(
            <div className='soleContainer'>
                <div className='fundsContainer'>
                    {fundsArray}
                </div>
                <div className='dataContainer'>
                    {companyArray}
                </div>
            </div>
        )
    }


}

export default Funds