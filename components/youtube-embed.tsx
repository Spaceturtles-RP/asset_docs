import React from "react";

const YouTubeEmbed = ({ id }: { id: string }) => (
    <div style={{
      position: 'relative',
      width: '100%',
      paddingBottom: '56.25%', // 16:9 aspect ratio (9/16 = 0.5625)
      height: 0,
      overflow: 'hidden'
    }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      />
    </div>
  )
  
  export default YouTubeEmbed;
  