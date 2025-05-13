// CSS 모듈을 import하여 클래스명을 styles 객체로 사용
import styles from './MyClockTime.module.css'

// React의 훅 useState, useEffect를 import
import { useState, useEffect } from 'react';

// MyClockTime 컴포넌트 정의
function MyClockTime() {
    // ctime 상태 변수 선언 및 초기값으로 현재 시각 설정
    // setCtime은 상태를 갱신하는 함수
    const [ctime, setCtime] = useState(new Date());

    // 컴포넌트가 마운트되었을 때 실행되는 useEffect 훅
    useEffect(() => {
        // 1초마다 현재 시간을 갱신하는 인터벌 설정
        const tm = setInterval(() => {
            setCtime(new Date());
        }, 1000);

        // 컴포넌트가 언마운트될 때 인터벌 정리(메모리 누수 방지)
        return () => {
            clearInterval(tm);
        }
    }, []); // 빈 배열로 설정하면 컴포넌트 마운트 시 딱 한 번 실행됨

    return (
        // 스타일을 적용하기 위해 CSS 모듈에서 클래스명을 가져옴
        <div className={styles.c3}>
            {/* 현재 시간을 상태값을 통해 출력 (매초 갱신됨) */}
            현재시각 : {ctime.toLocaleTimeString()}
        </div>
    );
}

// 다른 파일에서 이 컴포넌트를 사용할 수 있도록 export
export default MyClockTime;