import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Rest() {
    const [tdata, setTdata] = useState([]); // 서버에서 가져온 데이터 목록
    const [tags, setTags] = useState([]); // 렌더링용 JSX 배열
    const [isUpdate, setIsUpdate] = useState(false); // 수정모드 여부
    const [isUpdateId, setIsUpdateId] = useState(); // 수정할 항목의 ID

    const txt1Ref = useRef(); // 제목 입력창 ref
    const txt2Ref = useRef(); // 작성자 입력창 ref

    const url = 'http://localhost:3005/posts'; // JSON 서버 주소

    const getFetchData = async() => {
        // fetch를 이용한 방법 (대체 가능성 있음)
        // const resp = await fetch(url);
        // const data = await resp.json();

        // axios를 이용한 GET 요청
        const {data} = await axios.get(url);
        setTdata(data); // 상태 업데이트
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
        
        // fetch를 이용한 POST 요청 예시 (현재는 axios 사용 중)
        // const resp = await fetch(url, {
        //     method : 'POST',
        //     headers : {'Content-Type' : 'application/json'},
        //     body : JSON.stringify(postData)
        // });

        // const data = await resp.json();
        // console.log(data);

        // axios를 이용한 POST 요청
        const { data } = await axios.post(url, postData);
        setTdata([data, ...tdata]); // 새 항목을 기존 목록 앞에 추가

        // 입력창 초기화 및 포커스
        txt1Ref.current.value = '';
        txt1Ref.current.focus();
        txt2Ref.current.value = '';
    }

    const jsonDelete = async(id) => {
        // fetch를 이용한 DELETE 요청 예시 
        // await fetch(`${url}/${id}`,{
        //     method : 'DELETE'
        // });

        // axios를 이용한 DELETE 요청
        await axios.delete(`${url}/${id}`);
        setTdata(tdata.filter(item => item.id !== id)); // 삭제 후 목록 갱신
    }

    const jsonPut = async() => {
        const putData = {
            id : isUpdateId,
            title : txt1Ref.current.value,
            author : txt2Ref.current.value
        }

        // fetch를 이용한 PUT 요청 예시
        // const resp = await fetch(`${url}/${isUpdateId}`, {
        //     method : 'PUT',
        //     headers : {'Content-Type' : 'application/json'},
        //     body : JSON.stringify(putData)
        // });

        // const data = await resp.json();

        // axios를 이용한 PUT 요청
        const { data } = await axios.put(`${url}/${isUpdateId}`, putData);
        setTdata(tdata.map(item => item.id === isUpdateId ? data : item)); // 수정된 항목만 교체

        // 입력창 초기화
        txt1Ref.current.value = '';
        txt1Ref.current.focus();
        txt2Ref.current.value = '';

        setIsUpdate(false); // 수정모드 종료
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
        getFetchData(); // 컴포넌트 마운트 시 데이터 로딩
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
                    // inRef={txt1Ref} - 오타로 잘못 작성된 ref 속성. ref로 수정함
                    ref={txt1Ref}/>
            </div>
            <label htmlFor="txt2" className="my-2">작성자</label>
            <div>
                <input id="txt2"
                    type="text"
                    className="form-input w-full"
                    // inRef={txt2Ref} - 오타로 잘못 작성된 ref 속성. ref로 수정함
                    ref={txt2Ref}/>
            </div>
            <TailButton caption= {isUpdate ? "수정" :"입력" }
                        bcolor = "blue"
                        // handleClick={jsonPost} - 입력만 처리하던 초기 버튼 이벤트
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
