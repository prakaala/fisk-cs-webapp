import React from 'react'

//changed class based component into functional component
export default function ExecutiveMembers(){
  return (
      <>
      <div className = "executive_members--title">Faculty Staff</div>
      <div className='member_container'>

        <div className="member_container--item1">  

          <a href='https://www.linkedin.com/in/lei-qian-81166411/' className = "card">   
            <div className = "background_cover_president"></div>
              <article> 
                    <h1>Department Chair </h1>
                    <p class ="item--description">Dr. Lei Qian<br/>Associate Professor</p>
                  <button className = "card--btn_member">Know More</button>
              </article>
            </a>

        </div>

        <div className = "member_container--item2">

          <a href='https://www.linkedin.com/in/drsajidhussain/' className = "card"> 
            <div className = "background_cover_vice_president"></div>  
              <article>
                <h1>Professor</h1>
                    <p class ="item--description">Sajid Hussain<br/>Associate Provost for Research, Innovation, & Technology</p>
                  <button className = "card--btn_member">Know More</button>
              </article>
          </a>

        </div>   

        <div className="member_container--item3">  

            <a href='https://www.linkedin.com/in/firdous-kausar-a3669110/' className = "card">
              <div className = "background_cover_secretary"></div>
                <article>
                  <h1>Professor</h1>
                      <p class ="item--description">Firdous Kauser<br/>Associate Professor, Computer Science</p>
                    <button className = "card--btn_member">Know More</button>
                </article>
            </a>

        </div>

        <div className = "discord_container--item4">

          <a href='https://www.linkedin.com/in/jordyn-eaton-ab1239208' className = "card">
            <div className = "background_cover_treasurer"></div>
              <article>
                <h1>Treasurer</h1>
                    <p class ="item--description">Ning Xiang<br/>Classification: Junior</p>
                  <button className = "card--btn_member">Know More</button>
              </article>
          </a>

        </div> 

        <div className = "discord_container--item5">

          <a href='https://www.linkedin.com/in/jose-cordova-1339367/' className = "card">
            <div className = "background_cover_faculty"></div>
              <article>
                <h1>Faculty/Staff</h1>
                    <p class ="item--description">Jose Cordova<br/>Associate Professor, Computer Science<br/>Computer Science Accreditation Coordinator</p>
                  <button className = "card--btn_member">Know More</button>
              </article>
          </a>

        </div> 

        <div className = "discord_container--item6">

          <a href='https://www.linkedin.com/in/jose-cordova-1339367/' className = "card">
            <div className = "background_cover_pubRelation"></div>
              <article>
                <h1>Public Relations</h1>
                    <p class ="item--description">Jose Cordova<br/>Associate Professor, Computer Science<br/>Computer Science Accreditation Coordinator</p>
                  <button className = "card--btn_member">Know More</button>
              </article>
          </a>
          
        </div> 

      </div>
      </>
  )
}

