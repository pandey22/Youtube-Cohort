import React from "react";

export function VideoCard(props : any){
    return <div>
        <img src = {props.image}className="rounded-xl"/>
        <div className = "grid grid-cols-12 pt-3 pl-3">
            <div className="col-span-1">
                <img className="rounded-full w-12 h-12" src = {props.thumbImage}/>
            </div>
            
            <div className="col-span-11 pl-3">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11  text-gray-500 text-base ">
                   {props.author}
                 </div>
                <div className="col-span-11      text-gray-500 text-base">
                        {props.views} | {props.timestamp}
                    </div>
                </div>
            
        </div>
    </div>
}