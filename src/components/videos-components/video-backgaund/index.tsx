

type VideoBackgaundProps = {
    videoUrl: string
}

export default function VideoBackgaund({videoUrl}: VideoBackgaundProps) {
    return (
        <div>
            <iframe 
            width={"50%"}
            height={"50%"}
            src={videoUrl}
            title="YouTube video player"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            >
            
               
            </iframe>
        </div>
    )
}