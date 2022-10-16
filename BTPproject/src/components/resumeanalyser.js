import React from 'react'
import img from './assets/img.png'
import img2 from './assets/img2.png'
const resumeanalyser = () => {
  document.body.style.backgroundColor = "#E5E5E5"
  return (
    
      
    
    <div style={{marginTop:'3em',fontSize:'12px'}}>
        <div style={{display:'flex',flexDirection:'row',marginLeft:'3em'}}>
          <div style={{display:'flex',flexDirection:'column'}}>
            <div ><img style={{height:'8rem',borderRadius:'2em'}}src={img} alt="" /></div>
            <div style={{background:'white',padding:'.2em',display:'flex',marginTop:'1em',border: '0.796227px solid #F4F4F4'}}> <p>You are at  </p> <p style={{color:'#0275B1',fontSize:'1em',paddingLeft:'.2em'}}>Expert Level</p></div>
            
          </div>
          <div style={{background:'white',marginLeft:'7em',width:'50em',padding:'1em',height:'10em',border: '0.796227px solid #F4F4F4',borderRadius: '4.77736px'}}>
            <h3 style={{color:'#0275B1'}}>Hello Mayank Vyas</h3>
            <h4>Your Basic Information(Based on your Latest Resume)</h4>
            <p >Name:jdcnbkjsdbc <br />
            Email-id:safadvadv <br />
            Phone-Number:2387483
</p> 
          </div>
        </div>
        <div style={{marginLeft:'14em',marginTop:'1em'}}> <b style={{fontSize:'1.5em'}}>Resume Tips and Ideas</b> 
        <div style={{display:'flex',flexDirection:'column',background:'#FFFFFF',width:'60em',padding:'.3em',border: '0.796227px solid #F4F4F4',borderRadius:'4.77736px'}}>
          <p>1.According to our recomendation please add Achievements</p>
          <p>2.According to our recomendation please add projects</p>
        </div>
        </div>
        <div style={{marginTop:'1em',marginLeft:'30em', display:'flex',}}>
          <span style={{background:'white',color:'#0275B1',padding:'.7em',fontSize:'1.5em',height:'2em',marginTop:'1em',border: '0.796227px solid #F4F4F4',borderRadius:' 4.77736px'}}>
            <b> Your Resume Score Is </b>
          </span>
          <img style={{height:'10em',paddingLeft:'5em'}} src={img2} alt="" />
        </div>
        <div style={{marginTop:'2em',display:'flex',flexDirection:'row',width:'45em',paddingLeft:'70em'}}>
          <p   style={{fontSize:'.7em',color:'#0073B1',fontstyle: 'italic',fontweight: '500',fontsize: '1.2em',lineheight: '1.5em'}}>FOR FURTHER ANALYSIS AND RECOMMENDATIONS</p>
          <button style={{background:'white',border: '1px solid #F4F4F4',borderRadius: '.6em'}} ><span style={{fontweight: '200',fontSize:'.8em',lineHeight: '1.5em'}}> STUDENT ASSESMENT</span></button>
        </div>
      
    </div>
    
  )
}

export default resumeanalyser
