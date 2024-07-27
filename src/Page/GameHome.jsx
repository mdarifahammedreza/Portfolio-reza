const GameHome =()=>{
    const effect = `p-5 border bg-white text-black font-extrabold text-4xl shadow-md`
const swap =(value)=>{
    
    console.log(value,array[0])

}
let array = ['0','1','2','x','3','4','5','6','7','8','9','']
let value = {
        value0:'0',
        value1:'1',
        value2:'2',
        value3:'3',
        value4:'4',
        value5:'5',
        value6:'6',
        value7:'7',
        value8:'8',
        value9:'9',
        valuex:'x',
        value00:''
    }


return (

    <>
    <div className=" flex pt-10 px-10 gap-5 justify-end">

    <button className="btn btn-primary px-6 py-2 ">Restart</button>
    <button className="btn btn-primary px-6 py-2 ">Close</button>
    <button className="btn btn-primary px-6 py-2 ">New</button>

    </div>
    <div className="h-full flex flex-col justify-center items-center border">
        <p>9block  Game</p>
        <div className="border grid grid-cols-4 rounded-sm p-1 bg-white">
            <button className={effect} onClick={ ()=>swap(value.valuex)}>{value.valuex}</button>
            <button className={effect} onClick={ ()=>swap(value.value0)}>{value.value0}</button>
            <button className={effect} onClick={ ()=>swap(value.value1)}>{value.value1}</button>
            <button className={effect} onClick={ ()=>swap(value.value2)}>{value.value2}</button>
            <button className={effect} onClick={ ()=>swap(value.value3)}>{value.value3}</button>
            <button className={effect} onClick={ ()=>swap(value.value4)}>{value.value4}</button>
            <button className={effect} onClick={ ()=>swap(value.value5)}>{value.value5}</button>
            <button className={effect} onClick={ ()=>swap(value.value6)}>{value.value6}</button>
            <button className={effect} onClick={ ()=>swap(value.value7)}>{value.value7}</button>
            <button className={effect} onClick={ ()=>swap(value.value8)}>{value.value8}</button>
            <button className={effect} onClick={ ()=>swap(value.value9)}>{value.value9}</button>
            <button className={effect} onClick={ ()=>swap(value.value00)}>{value.value00}</button>
            
        </div>
</div>
    </>
);




}

export default GameHome;