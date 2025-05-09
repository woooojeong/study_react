import { useState } from "react";   //React에서 useState를 import 한다.

export default function MyListItem({title, imgUrl, content}) {
    // 증가건수 변수선언 -> state 변수로 변경
    // let cnt = 0;
    const [cnt,setCnt] = useState(0);

    // 클릭이벤트 함수선언
    const handleClick = () => {
        // cnt = cnt + 1 ;
        //변경된 상태값(setCnt)이 나오도록한다.
        setCnt( cnt + 1 ) ;
        console.log('cnt=', cnt);   //state로 변경 후 여기에 로그를 찍으면 이전 값이 나오게된다.
    }
  return (
    <div className="flex w-full h-full justify-center items-start p-2 border border-slate-400">
      <div className="flex w-1/3 m-2">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="flex flex-col justify-between p-2 m-2 w-2/3 h-full">
        <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{content}</p>
        </div>
        <div className="flex justify-end items-center">
            <span onClick={handleClick} className="cursor-pointer">❤️</span>
            <span className="inline-flex mx-2 font-bold">좋아요</span>
            <span className="font-bold text-xl">{cnt}</span>
        </div>
      </div>
    </div>
  )
}
