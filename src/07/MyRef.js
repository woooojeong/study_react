import TailButton from "../UI/TailButton";
import { useState, useRef, useEffect } from "react";

export default function MyRef() {
    // 💡 State 변수: 값이 바뀌면 컴포넌트가 자동으로 리렌더링됨
    const [sVal, setSVal] = useState(0);

    // 💡 컴포넌트 변수: 함수형 컴포넌트 내부에서 선언된 일반 변수 (리렌더링 시 초기화됨)
    let cVal = 0;

    // 💡 Ref 변수: 리렌더링 없이 값을 유지할 수 있는 변경 가능한 값
    // 초기값을 0으로 설정하지 않으면 undefined + 1 = NaN 발생!
    const rVal = useRef(0);

    // 👇 컴포넌트 변수 버튼 클릭 시 실행
    const handleC = ()=> {
        cVal = cVal + 1;
        // 리렌더링되지 않기 때문에 화면에는 항상 0만 보임
        console.log("컴포넌트 변수(cVal) : ", cVal);
    }

    // 👇 State 변수 버튼 클릭 시 실행
    const handleS = ()=> {
        // set함수로 State를 변경 → 화면이 리렌더링됨
        setSVal(sVal + 1);
    }

    // 💬 sVal 값이 바뀔 때마다 콘솔에 출력 (컴포넌트가 리렌더링된다는 증거)
    useEffect(() => {
        console.log("state 변수(sVal) : ", sVal);
    }, [sVal]);

    // 👇 Ref 변수 버튼 클릭 시 실행
    const handleR = ()=> {
        // current 값을 직접 변경 → 리렌더링은 안 됨
        rVal.current = rVal.current + 1;
        console.log("ref 변수(rVal): ", rVal);
    }

    return (
        <div className="w-10/12 flex justify-center items-center">
            <div className="grid grid-cols-3 gap-4">
                {/* 💬 화면에는 값이 출력되지만 cVal은 리렌더링마다 0으로 초기화됨 */}
                <div className="text-blue-700 font-bold text-center text-xl">
                    컴포넌트 변수 : {cVal}
                </div>
                {/* 💬 sVal이 변하면 화면도 바뀜 */}
                <div className="text-orange-700 font-bold text-center text-xl">
                    State 변수 : {sVal}
                </div>
                {/* 💬 ref는 값은 변하지만 화면 갱신은 안 되므로 값 확인은 콘솔로! */}
                <div className="text-rose-500 font-bold text-center text-xl">
                    Ref 변수 :  {rVal.current}
                </div>
                {/* 버튼 클릭 시 각 handle 함수 실행 */}
                <div>
                    <TailButton caption='컴포넌트 변수' bcolor='blue' handleClick={handleC} />
                </div>
                <div>
                    <TailButton caption='State 변수' bcolor='orange' handleClick={handleS} />
                </div>
                <div>
                    <TailButton caption='Ref 변수' bcolor='rose' handleClick={handleR} />
                </div>
            </div>
        </div>
    )
}
