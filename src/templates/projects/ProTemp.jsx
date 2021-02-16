import React, {useEffect } from 'react'

const ProTemp = ({src}) => {
    return (
        <div>
            <div>the linh tinh project</div>
            <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
            {
                src.map((s, i) =>(<div><img src={s} key={i}/> </div>))
            }
            
            
        </div>
    )
}

export default ProTemp
