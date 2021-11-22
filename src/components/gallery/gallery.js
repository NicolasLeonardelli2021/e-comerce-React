import {RViewer,RViewerTrigger} from 'react-viewerjs'

export const Gallery = ({img}) => {
    
    let imagenes = [
        require("../../imagenes/NSAU16.jpg"),
        require("../../imagenes/NSAU19.jpg"),
        require("../../imagenes/NSKB28U.jpg")
    ]

    
    
    return (
        <div>
            <RViewer imageUrls={imagenes}>
                <div style={{display: 'flex', marginTop: '40px'}}>
                    {imagenes.map((imagen, index)=>{
                        return(
                            <RViewerTrigger index={index}>
                                <img src={img} style={{width:'150px', height:'150px',marginLeft:'20px', border:'2px solid black' }}/>
                            </RViewerTrigger>
                        )
                    })}
                </div>
            </RViewer>
        </div>
    )
}