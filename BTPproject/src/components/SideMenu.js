import SideMenuCSS from "./SideMenu.module.css"
import SliderBtn from "./SliderBtn";
import ResumeBtn from "./ResumeBtn";

export default function SideMenu(props){
    return (
        <div className={props.isMenuActive ? (SideMenuCSS.main_div + " " + SideMenuCSS.active) : (SideMenuCSS.main_div + " " + SideMenuCSS.notactive) } >
            <div className={SideMenuCSS.help_div} >
                <img className={SideMenuCSS.help_pic} src="./help.png" alt="help" />
            </div>
            <div className={SideMenuCSS.mid_div} >
                <div className={SideMenuCSS.mid1_div} >
                    <div className={SideMenuCSS.mid2_div} >
                        <div className={SideMenuCSS.mid3_div} >
                            <SliderBtn picName="side1" text="PROFILE" />
                        </div>
                        <div className={SideMenuCSS.mid3_div} >
                            <SliderBtn picName="side2" text="STUDENT ASSESSMENT" />
                        </div>
                    </div>

                    <div className={SideMenuCSS.mid2_div} >
                        <div className={SideMenuCSS.mid3_div} >
                            <SliderBtn picName="side3" text="TEAMS" />
                        </div>
                        <div className={SideMenuCSS.mid3_div} >
                            <SliderBtn picName="side4" text="CONTACT US" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={SideMenuCSS.last_div} >
                <p className={SideMenuCSS.resume_heading}>Resume</p>
                <ResumeBtn upperText="Upload Resume" lowerText="Send to Server" />
                <ResumeBtn upperText="Resume analysis" lowerText="Get checked your Resume" />
            </div>
            <div className={SideMenuCSS.logout_div} >
                <p className={SideMenuCSS.logout}>LOG OUT</p>
            </div>
        </div>
    );
}