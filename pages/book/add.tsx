import React, {useState} from "react";

const AddView = ()=>{
    const [data,setData] = useState({})
    const onChangeValue = (key:string,value:string)=>{
        switch (key){
            case "id": setData({...data,id:value});break
            case "name": setData({...data,name:value});break
            case "cat": setData({...data,cat:value});break
            case "publish": setData({...data,publish:value});break
            case "author": setData({...data,author:value});break
            case "status": setData({...data,status:value});break

        }
    }
    const submit = ()=>{
       fetch("http://localhost:8080/book",{
           method:"POST",
           headers:{'Content-Type': 'application/json'},
           body:JSON.stringify(data)
       }).then((results)=>{
           console.log(results);
       })
    }
    return(
        <div className="container m-auto">
            <div className="bg-blue-200 p-3 m-10 rounded mb-10 relative">
                <p className="font-bold text-center text-3xl">Nhập thông tin sách</p>
                <div className="grid grid-cols-2 gap-2">
                    <input onChange={(e)=>onChangeValue("id",e.target.value)} className="p-2 rounded" placeholder={"Mã sách"}/>
                    <input onChange={(e)=>onChangeValue("name",e.target.value)} className="p-2 rounded" placeholder={"Tên sách"}/>
                    <input onChange={(e)=>onChangeValue("cat",e.target.value)} className="p-2 rounded" placeholder={"Thể loại"}/>
                    <input onChange={(e)=>onChangeValue("publish",e.target.value)} className="p-2 rounded" placeholder={"Năm xuất bản"}/>
                    <input onChange={(e)=>onChangeValue("author",e.target.value)} className="p-2 rounded" placeholder={"Tác giả"}/>
                    <input onChange={(e)=>onChangeValue("status",e.target.value)} className="p-2 rounded" placeholder={"Tình trạng"}/>
                </div>

                <div className="flex justify-center mt-3">
                    <div onClick={submit} className="p-3 bg-blue-600 text-blue-50 rounded text-center font-bold hover:bg-blue-500 cursor-pointer">Thêm sách</div>
                </div>
            </div>
        </div>
    )
}
export default AddView
