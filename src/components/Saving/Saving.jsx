import { savings } from '../../data/data'
import { iconsImgs, personsImgs } from '../../utils/images'
import './saving.css'

export default function Saving() {
  return (
    <div className='grid-two-item grid-common grid-c6'>
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">
                Savings
            </h3>
            <button className="grid-c-title-icon">
                <img src={iconsImgs.plus} alt="" />
            </button>
        </div>
        <div className="grid-c6-content">
            <div className="grid-c6-items">
                {
                    savings.map(sav=>(
                        <div className="gid-item" key={sav.id}>
                            <div className="grid-item-top">
                                <div className="grid-item-top-l">
                                    <div className="avatar img-fit-cover">
                                        <img src={personsImgs.person_three} alt="" />
                                    </div>
                                    <p className="text text-silver-v1">{sav.title}</p>
                                </div>
                                <div className="grid-item-top-r">
                                    <p className="text-silver-v1">$ {sav.saving_amount}</p>
                                </div>
                            </div>
                            <div className="grid-item-bottom">
                                <div className="grid-item-badges">
                                    <span className="grid-item-badge">Date taken { sav.date_taken }</span>
                                    <span className="grid-item-badge">Amount left $ { sav.amount_left }</span>
                                </div>
                                <div className="grid-item-progress">
                                    <div className="grid-item-fill"></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
