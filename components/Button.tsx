"use client"
export default function Button({title,isStartBtn}:{title:String,isStartBtn:Boolean}){
    
    return(
        <div>
           <button  className={`${isStartBtn?'bg-[#2F4858]':'bg-white'} border-[1px] border-[#FFB684]  text-[#FFB684] shadow-lg w-[14rem] font-medium h-[14rem] rounded-full flex items-center justify-center`}>
           {title}
           {
            isStartBtn?<div className={`bg-transparent hover:transition-all duration-150 absolute border-[0.3px] border-transparent hover:border-[#FFB684] flex items-center justify-center transition-2 hover:h-[12rem] hover:w-[12rem]  rounded-full`}>
             <div className="bg-transparent absolute hover:transition-all duration-150 border-[0.3px] border-transparent hover:border-[#FFB684] flex items-center justify-center h-[10rem] w-[10rem]  hover:h-[10rem] hover:w-[10rem]  rounded-full"></div>
            </div>:null
           }
           </button>
        </div>
)
}
