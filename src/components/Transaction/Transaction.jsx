import { iconsImgs } from '../../utils/images'
import './transaction.css'
import {transactions} from '../../data/data'
export default function Transaction() {
  return (
    <div className='grid-one-item grid-common grid-c2'>
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">All Transaction</h3>
            <button className='grid-c-title-icon'>
                <img src={iconsImgs.plus} alt=""/>
            </button>
        </div>

        <div className="grid-content">
            <div className="grid-items">
                {
                    transactions.map(transaction => (
                        <div className="grid-item" key={transaction.id}>
                            <div className="grid-item-l">
                                <div className="avatar image-fit-cover">
                                    <img src={transaction.image} alt="" />
                                </div>
                                <p className="text">{transaction.name} <span className='date'>{transaction.date}</span></p>
                            </div>
                            <div className="grid-item-r">
                                <p>$ {transaction.amount}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
