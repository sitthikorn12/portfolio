import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="bx bx-award about-icon"></i>

            <h3 className="about__subtitle">Education</h3>
            <span className="about__subtitle">KMUTNB</span>
        </div>

        <div className="about__box">
            <i class="bx bx-briefcase-alt about-icon"></i>

            <h3 className="about__subtitle">Projects</h3>
            <span className="about__subtitle">10 + Projects</span>
        </div>

        <div className="about__box">
            <i class="bx bx-support about-icon"></i>

            <h3 className="about__subtitle">Status</h3>
            <span className="about__subtitle">Available for Intern</span>
        </div>
    </div>
  )
}

export default Info
