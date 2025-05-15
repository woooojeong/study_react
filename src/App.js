// import logo from './logo.svg';    // 이미지를 사용할때도 임포트해서 사용한다.
import './App.css';
// import { DiAtom } from "react-icons/di";  // 아이콘도 마찬가지.
// import Hello from './01/Hello';
// import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import Traffic from './06/Traffic';
// import MyRef from './07/MyRef';
// import MyRefAdd from './07/MyRefAdd';
// import Gallery from './08/Gallery';
import RouteMain from './09/RouteMain';

import { RiHomeHeartFill } from "react-icons/ri";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <MyClock />
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     {/* <Hello /> */}
    //     {/* <p className='bg-slate-500'>
    //       Edit <code>src/App.js</code> and save to reload.
    //       <DiAtom />
    //     </p> */}
       
    //   </header>
    // </div>

    // TailwindCSS를 이용한 화면재구성
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
        <p>React Basic</p>
        <p><RiHomeHeartFill/></p>
      </header>
      {/* grow : header와 footer를 쓰고 남은 영역을 모두 사용 */}
      <main className='grow w-full flex justify-center items-center overflow-y-auto'>
        {/* <MyClock /> */}
        {/* <MyDiv1/> */}
        {/* <MyList/> */}
        {/* <Lotto /> */}
        {/* {<Traffic />} */}
        {/* <MyRef /> */}
        {/* <MyRefAdd /> */}
        {/* <Gallery /> */}
        <RouteMain />
      </main>
      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
        ⓒ Jeong Woo Jeong
      </footer>
    </div>
  );
}

export default App;
