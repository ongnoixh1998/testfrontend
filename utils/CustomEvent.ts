import React from "react";
import {useEffect, useState} from "react";

export const useAddCustomEvent = (event:string,callback:any)=>{
    window.document.addEventListener(event,callback)

}
export const userRemoveCustomEvent = (event:string,callback:any)=>{
    window.document.removeEventListener(event,callback)
}
export const userDispatchCustomEvent = (event:string)=>{
    let eventDispatch = new Event(event, {bubbles: true}); // (2)
    window.document.dispatchEvent(eventDispatch)
}