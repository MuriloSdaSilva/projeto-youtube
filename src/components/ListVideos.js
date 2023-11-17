import React from "react";


const ListVideos = ({data})  =>{

    return (
        <div >
        <div className="row">
            {data.items.map((item, i) =>(
                <div key={i}>
                    <div className="col s4">
                        <div className="card medium">
                            <div className="card-header-title">
                                <p>{item.snippet.title}</p>
                            </div>
                            <div className="card-image">
                                <img src={item.snippet.thumbnails.medium.url} alt=""/>
                            </div>
                            <footer class="card-footer">
                            <div className="card-footer-item">
                                <a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} target="_blank">Ouça agora</a>
                            </div>
                            </footer>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default ListVideos;
