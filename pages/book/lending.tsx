import React, {useEffect, useState} from "react";


export const Lendingiew = ()=>{
    const [books,setBooks] = useState([]);
    const [students,setStudents] = useState([]);
    const [dataRequest,setDataRequest] = useState({});
    useEffect(()=>{
        fetch("http://localhost:8080/book",{
            method:"GET",
        }).then((results)=>{
            results.json().then((data)=>{
                setBooks(data.data);
            })

        })
        fetch("http://localhost:8080/student",{
            method:"GET",
        }).then((results)=>{
            results.json().then((data)=>{
                setStudents(data.data);
            })

        })
    },[]);
    const onChangeValue = (key:any,value:any)=>{
        switch (key){
            case "bookId": setDataRequest({...dataRequest,bookId:value});break
            case "studentId": setDataRequest({...dataRequest,studentId:value});break
            case "quantity": setDataRequest({...dataRequest,quantity:value});break
            case "createDate": setDataRequest({...dataRequest,createDate:value});break
            case "returnDate": setDataRequest({...dataRequest,returnDate:value});break
        }
    }
    const submit = ()=>{
        fetch("http://localhost:8080/lending",{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(dataRequest)
        }).then((results)=>{
            console.log(results);
        })
    }
    return(
        <div className="container m-auto">
            <div className="bg-blue-200 p-3 m-10 rounded mb-10 relative">
                <p className="font-bold text-center text-3xl">Mượn sách</p>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <span>Chọn sách</span>
                        <select className="p-2 rounded w-full" onChange={(e)=>onChangeValue("bookId",e.target.value)}>
                            {books.map((book:any,index)=>{
                                return(
                                    <option key={index} value={book.id}>{book.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        <span>Chọn Sinh Viên</span>
                        <select className="p-2 rounded w-full" onChange={(e)=>onChangeValue("studentId",e.target.value)}>
                            {students.map((student:any,index)=>{
                                return(
                                    <option key={index} value={student.id}>{student.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col-span-2 ">
                        <div className="grid grid-cols-3 gap-3">
                            <input onChange={(e)=>onChangeValue("quantity",e.target.value)} className="p-2 rounded" placeholder={"Số lượng"}/>
                            <input onChange={(e)=>onChangeValue("createDate",e.target.value)} className="p-2 rounded" placeholder={"Ngày mượn"}/>
                            <input onChange={(e)=>onChangeValue("returnDate",e.target.value)} className="p-2 rounded" placeholder={"Ngày trả"}/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-3">
                    <div onClick={submit} className="p-3 bg-blue-600 text-blue-50 rounded text-center font-bold hover:bg-blue-500 cursor-pointer">Mượn sách</div>
                </div>
            </div>
        </div>
    )
}
export default Lendingiew
