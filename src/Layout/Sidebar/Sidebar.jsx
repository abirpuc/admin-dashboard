import { useContext, useEffect, useState } from "react";
import { navigationLinks } from "../../data/data";
import { personsImgs } from "../../utils/images";
import './sidebar.css'
import { SidebarContext } from "../../contex/sidebarContex";

export default function Sidebar() {

    const [activeLinkIdx, setActiveLinkIdx] = useState(1)
    const [sidebarClass, setSidebarClass] = useState("")
    const {isSidebarOpen} = useContext(SidebarContext)

    useEffect(()=>{
        if(isSidebarOpen){
            setSidebarClass("sidebar-change")
        }else{
            setSidebarClass("")
        }
    },[isSidebarOpen])
    
  return (
    <div className={`sidebar ${sidebarClass}`}>
        <div className="user-info">
            <div className="info-img img-fit-cover">
                <img src={personsImgs.person_one} alt="" />
            </div>
            <span className="info-name">MH Abir</span>
        </div>
            <nav className="navigation">
                <ul className="nav-list">
                    {
                        navigationLinks.map(link => (
                            <li key={link.id} className="nav-item" onClick={()=>setActiveLinkIdx(link.id)}>
                                <a href="#" className={`nav-link ${link.id === activeLinkIdx ? 'active' : ''}`}>
                                    <img src={`${link.image}`} alt={link.title} className="nav-link-icon" />
                                    <span className="nav-link-text">{link.title}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
  )
}
