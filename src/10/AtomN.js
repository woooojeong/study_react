// Recoil에서 상태를 생성하고 관리하기 위한 atom과 selector를 import
import { atom, selector } from "recoil";

// atom: 상태(state)의 기본 단위. 컴포넌트 간 공유 가능한 전역 상태를 정의할 수 있음
export const AtomN = atom({
    key : "AtomN",     // 이 atom을 고유하게 식별하기 위한 key (중복 X)
    default : 0        // 초기값. 숫자형 상태로 0부터 시작
});

// selector: 파생된 상태(derived state)를 생성
// AtomN의 값을 기반으로 계산된 값을 제공 (여기서는 AtomN * 2)
export const AtomN2 = selector({
    key : "AtomN2",    // 이 selector의 고유 key
    get : ({get}) => { // get 함수는 다른 atom이나 selector의 값을 가져오는 함수
        return get(AtomN) * 2; // AtomN의 값을 가져와서 2배로 만든 결과를 반환
    }
});