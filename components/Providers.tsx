"use client"
import {RecoilRoot} from "recoil"
import React from 'react';
export default function Providers({children}:{children:React.ReactNode}){
    return(
        <RecoilRoot>
            {children}
        </RecoilRoot>
    )
}