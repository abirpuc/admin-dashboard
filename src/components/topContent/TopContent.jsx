import { useContext } from 'react'
import './topcontent.css'
import { SidebarContext } from '../../contex/sidebarContex'
import { iconsImgs } from '../../utils/images'

export default function TopContent() {
    const {toggleSidebar} = useContext(SidebarContext)
  return (
    <div className='main-content-top'>
        <div className="content-top-left">
            <button className='sidebar-toggle' onClick={()=>toggleSidebar()}>
                <img src={iconsImgs.menu} alt="" />
            </button>
            <h3 className='content-top-title'>Home</h3>
        </div>
        <div className="content-top-btn">
            <button className="search-btn-top-btn">
                <img src={iconsImgs.search} alt="" />
            </button>
            <button className="search-btn-top-btn">
                <img src={iconsImgs.bell} alt="" />
                <span className='notification-btn-dot'></span>
            </button>
        </div>
    </div>
  )
}
