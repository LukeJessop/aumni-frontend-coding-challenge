import React, {useState} from 'react'
import fundList from '../mocks/funds.json'
import Companies from './Companies'
import './CSS/funds.css'

const Funds = () => {
    const [funds, updateFunds] = useState(fundList)
    const [clickedFundId, updateClickedFund] = useState('')
    const [clickedCompanyId, updateClickedCompany] = useState('')

    
    const fundsArray = funds.map((fund) => 
        <div className="fund-container">
            <div className='fund' onClick={() => {
                if(clickedFundId !== fund.id){
                    updateClickedFund(fund.id)

                }else if(clickedFundId === fund.id){
                    updateClickedFund('')
                }
            }}>
                <div className='fund-name'>{fund.name}</div>
            </div>

                {fund.companies.map((company) => 
                    {if(fund.id === clickedFundId){
                        return(
                            <div className="company-list" onClick={() =>
                                {
                                    if(clickedCompanyId !== company.id){
                                        updateClickedCompany(company.id)
                                    }
                                }
                            }>
                                <h3>{company.name}</h3>
                            </div>
                        )
                    }}
                )}

        </div>
    )
        
    const companyArray = funds.map((fund) =>
    <div>
            {fund.companies.map((company) => 
                {if(company.id === clickedCompanyId){
                    return(
                        <Companies key={company.id} companies={company} fundName={fund.name}/>
                    )
                }}
            )}

    </div>
    )

        
        return(
            <div className='sole-container'>
                <div className='funds-container'>
                    {fundsArray}
                </div>
                <div className='data-container'>
                    {companyArray}
                </div>
            </div>
        )

}




export default Funds