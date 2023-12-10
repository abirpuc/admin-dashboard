import { subscriptions } from '../../data/data'
import { iconsImgs } from '../../utils/images'
import './subscription.css'

export default function Subscription() {
  return (
    <div className='grid-two-item grid-common grid-c5'>
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">
                Subscription
            </h3>
            <button className="grid-c-title-icon">
                <img src={iconsImgs.plus} alt="" />
            </button>
        </div>
        <div className="grid-c5-content">
            <div className="grid-items">
                {
                    subscriptions.map(sub => (
                        <div className="grid-item" key={sub.id}>
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={iconsImgs.alert} alt="" />
                                </div>
                                <p className="text text-silver-v1">{sub.title} <span>{sub.due_date}</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1">$ {sub.amount}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
