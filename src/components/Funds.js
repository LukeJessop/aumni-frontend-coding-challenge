import React, {Component} from 'react'
import funds from '../mocks/funds.json'
import Companies from './Companies'

class Funds extends Component {
    constructor(){
        super()
        this.state={
            funds: funds,

        }
    }

    render(){
        const fundsArray = this.state.funds.map((e) => 
            <div>
                <div>Fund: {e.name}</div>
                {e.companies.map((f) => <Companies key={f.id} companies={f}/>)}
            </div>
        )
        return(
            <div>
                {fundsArray}
            </div>
        )
    }


}

export default Funds