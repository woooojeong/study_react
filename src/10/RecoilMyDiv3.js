import TailButton from "../UI/TailButton";
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";

export default function RecoilMyDiv3({d1, d2, d3}) {
    const [n,setN] = useRecoilState(AtomN);

    const handleUp = () => {
        setN(n + 1);
        localStorage.setItem("n", n);
    }

    const handleDown = () => {
        setN(n - 1);
        localStorage.setItem("n", n);
    }

    // const handleSave = () => {
    //     localStorage.setItem("n", n);
    // }

    const handleRemove = () => {
        localStorage.removeItem("n", n);
        setN(0);
    }

    return (
      <div className="flex flex-col p-5 m-10 
                      w-3/4 h-3/4 
                      bg-pink-300 text-white">
        {`${d1} > ${d2} > ${d3}`}
        <div className="grid grid-cols-4 mt-4">
            <TailButton caption= "증가"
                        bcolor= "blue"
                        handleClick={handleUp}/> 
            <TailButton caption= "감소"
                        bcolor= "red"
                        handleClick={handleDown}/>
            {/* <TailButton caption= "저장"
                        bcolor= "red"
                        handleClick={handleSave}/> */}
            <TailButton caption= "삭제"
                        bcolor= "red"
                        handleClick={handleRemove}/>            
        </div>
      </div>
    )
  }
  