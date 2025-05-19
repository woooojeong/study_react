import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Rest() {
    const [tdata, setTdata] = useState([]);
    const [tags, setTags] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isUpdateId, setIsUpdateId] = useState();

    const txt1Ref = useRef();
    const txt2Ref = useRef();

    const url = 'http://localhost:3005/posts';

    const getFetchData = async() => {
        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data);
    }

    const jsonPost = async() => {
        if (txt1Ref.current.value === ''){
            alert('제목을 입력하세요.');
            txt1Ref.current.focus();
            return;
        }

        if(txt2Ref.current.value ===''){
            alert('작성자를 입력하세요.');
            txt2Ref.current.focus();
            return;
        }

        const postData = {
            title : txt1Ref.current.value,
            author : txt2Ref.current.value,
        }

        const resp = await fetch(url, {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(postData)
        });

        const data = await resp.json();
        console.log(data);

        setTdata([data, ...tdata]);
        txt1Ref.current.value = '';
        txt1Ref.current.focus();
        txt2Ref.current.value = '';
    }

    const jsonDelete = async(id) => {
        await fetch(`${url}/${id}`,{
            method : 'DELETE'
        });

        setTdata(tdata.filter(item => item.id !== id));
    }

    const jsonPut = async() => {
        const putData = {
            id : isUpdateId,
            title : txt1Ref.current.value,
            author : txt2Ref.current.value
        }

        const resp = await fetch(`${url}/${isUpdateId}`, {
            method : 'PUT',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(putData)
        });

        const data = await resp.json();
        setTdata(tdata.map(item => item.id === isUpdateId ? data : item));

        txt1Ref.current.value = '';
        txt1Ref.current.focus();
        txt2Ref.current.value = '';

        setIsUpdate(false);
        setIsUpdateId('');
    }

    const handleUpdate = (item) => {
        txt1Ref.current.value = item.title;
        txt2Ref.current.value = item.author;

        setIsUpdate(true);
        setIsUpdateId(item.id);
    }

    const handleOk = () => {
        if(isUpdate) jsonPut();
        else jsonPost();
    }

    useEffect(()=>{
        getFetchData();
    },[]);

    useEffect(()=>{
        console.log(tdata);

        let tm = tdata.map(item => <tr key={item.id}
                                       className="h-10 border-b">
                                    <td className="text-center">{item.title}</td>
                                    <td className="text-center">{item.author}</td>
                                    <td className="text-center">
                                        <TailButton caption= "삭제"
                                                    bcolor="orange"
                                                    handleClick={()=>jsonDelete(item.id)} /> 
                                    </td>
                                    <td className="text-center">
                                        <TailButton caption= "수정"
                                                    bcolor="lime"
                                                    handleClick={() => handleUpdate(item)} /> 
                                    </td>
                                   </tr>);
        setTags(tm);
    },[tdata]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-7
                        bg-slate-100
                        text-center my-5 p-5">
            <label htmlFor="txt1" className="my-2">제목</label>
            <div className="flex col-span-3">
                <input id="txt1"
                    type="text"
                    className="form-input w-full"
                    // inRef={txt1Ref} 
                    ref={txt1Ref}/>
            </div>
            <label htmlFor="txt2" className="my-2">작성자</label>
            <div>
                <input id="txt2"
                    type="text"
                    className="form-input w-full"
                    // inRef={txt2Ref} 
                    ref={txt2Ref}/>
            </div>
            <TailButton caption= {isUpdate ? "수정" :"입력" }
                        bcolor = "blue"
                        // handleClick={jsonPost}/>
                        handleClick={handleOk}/>
        </div>
        <table className="w-11/12 text-left text-sm font-light text-surface">
            <thead className="border-b border-neutral-200 font-medium">
                <tr className="bg-black text-white font-bold text-center">
                    <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
                    <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
                    <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
                    <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
                </tr>
            </thead>
            <tbody>
                {tags}
            </tbody>
        </table>
    </div>
  )
}
