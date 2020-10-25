import React from 'react';

// token logos
import eth_logo from '../../assets/eth_logo.png'
import char_logo from '../../assets/char_logo.png'


class SellForm extends React.Component {

    constructor(props) {

        super(props)
    
        this.state = {
    
            output: '0'
        }
    }

    render() {
        return (
            <form className='mb-3' onSubmit={ ( event ) => {
                event.preventDefault() // prevents the page from reloading

                let tokenAmount = window.web3.utils.toWei(this.input.value.toString(), 'Ether')
                this.props.sellTokens(tokenAmount)
                }}>

                <div>

                    <label className='float-left'>
                        <b>Input</b>
                    </label>

                    <span className='float-right text-muted'>
                        Balance: { window.web3.utils.fromWei( this.props.tokenBalance, 'Ether' ) }
                    </span>
                </div>

                <div className='input-group mb-4'>

                    <input type='text' className='form-control form-control-lg' 
                        onChange={ (event) => {this.setState({ output: this.input.value.toString() / 100 } )} } 
                        ref={ ( input ) => { this.input = input }}
                        placeholder='0' required />

                    <div className='input-group-append'>
                        <div className='input-group-text'>

                            <img src={char_logo} height='32' alt='' />

                            &nbsp;&nbsp;&nbsp; CHAR

                        </div>
                    </div>
                </div>

                <div>

                    <label className='float-left'>
                        <b>Output</b>
                    </label>

                    <span className='float-right text-muted'>
                        Balance: { window.web3.utils.fromWei( this.props.ethBalance, 'Ether' ) }
                    </span>
                </div>

                <div className='input-group mb-2'>

                    <input type='text' className='form-control form-control-lg' 
                    placeholder='0' value={this.state.output} disabled />

                    <div className='input-group-append'>
                        <div className='input-group-text'>

                            <img src={eth_logo} height='32' alt='' />

                            &nbsp; ETH
                        </div>
                    </div>
                </div>
                <div className='mb-5'>

                    <span className='float-left text-muted'>
                        Exchange Rate
                    </span>

                    <span className='float-right text-muted'>
                        100 DApp = 1 ETH
                    </span>
                </div>

                <button type='submit' className='btn btn-primary btn-block btn-lg'>
                    Make Swap
                </button>

            </form>
        )
    }
}

export default SellForm