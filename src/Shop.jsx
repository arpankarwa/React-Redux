import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';


export default function Shop() {

    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch);
    return (
        <>
            <h3 className='my-4'>Deposit/Withdraw Money from Bank</h3>

            <button className='btn btn-primary mx-2 my-4' onClick={() => { actions.withdrawMoney(1000) }}>-</button>
            Change balance
            <button className='btn btn-primary mx-2 my-4' onClick={() => { actions.depositMoney(1000) }}>+</button>
        </>
    )
}
