import React from 'react'

function ProjectSection({image, title, description}) {
    return (
        <>
            <div className='ProjectSection'>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
                {/* <div id='introBtn' className='ProjectBtn'>
                    <button>github</button>
                    <button>live demo</button>
                </div> */}
            </div>
        </>
    )
}

export default ProjectSection