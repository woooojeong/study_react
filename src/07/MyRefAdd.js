import TailButton from "../UI/TailButton";
import { useRef, useEffect } from "react";

export default function MyRefAdd() {
    // Ref 변수 선언 (input 요소를 직접 참조하기 위함)
    const x1 = useRef(); // 첫 번째 입력창
    const x2 = useRef(); // 두 번째 입력창
    const x3 = useRef(); // 결과 출력창

    // "=" 버튼 클릭 시 실행되는 함수
    const handleAdd = () => {
        // 첫 번째 값이 비어있으면 경고 후 포커스
        if (!x1.current.value) {
            alert("첫번째 값을 입력하세요.");
            x1.current.focus();
            return;
        }

        // 두 번째 값이 비어있으면 경고 후 포커스
        if (!x2.current.value) {
            alert("두번째 값을 입력하세요.");
            x2.current.focus();
            return;
        }

        // 문자열 덧셈이 아닌 정수 덧셈을 위해 parseInt 사용
        x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value);
    };

    // 입력창에 포커스될 때 실행 (입력값과 결과 초기화)
    const handleFocus = (x) => {
        x3.current.value = ''; // 결과창 초기화
        x.current.value = '';  // 현재 입력창 초기화
    };

    // 컴포넌트가 처음 렌더링될 때 첫 번째 입력창에 포커스
    useEffect(() => {
        x1.current.focus();
    }, []);
    
    return (
        <div className="w-10/12 flex justify-center items-center">
            <div>
                {/* 입력창/연산기호/버튼/결과창을 포함한 그리드 레이아웃 */}
                <div className="bg-slate-50 grid grid-cols-5 gap-2 m-5 p-5">
                    {/* 첫 번째 숫자 입력 */}
                    <input type='number' id='txt1'
                        ref={x1}
                        onFocus={() => handleFocus(x1)}
                        className="bg-gray-50 border border-gray-300 rounded-lg 
                                   text-gray-900 text-center text-xl p-2.5" />
                    
                    {/* 연산 기호 + */}
                    <div className="flex justify-center items-center text-xl font-bold">
                        +
                    </div>

                    {/* 두 번째 숫자 입력 */}
                    <input type='number' id='txt2'
                        ref={x2}
                        onFocus={() => handleFocus(x2)}
                        className="bg-gray-50 border border-gray-300 rounded-lg 
                                   text-gray-900 text-center text-xl p-2.5" />
                    
                    {/* = 버튼 */}
                    <TailButton caption='=' bcolor='orange' handleClick={handleAdd} />

                    {/* 결과 출력창 */}
                    <input type='number' id='txt3'
                        ref={x3}
                        className="bg-gray-50 border border-gray-300 rounded-lg 
                                   text-gray-900 text-center text-xl p-2.5" />
                </div>
            </div>
        </div>
    );
}
