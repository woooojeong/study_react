// import logo from './logo.svg';    // 이미지를 사용할때도 임포트해서 사용한다.
import './App.css';
// import { DiAtom } from "react-icons/di";  // 아이콘도 마찬가지.
// import Hello from './01/Hello';
import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import Traffic from './06/Traffic';
// import MyRef from './07/MyRef';
import MyRefAdd from './07/MyRefAdd';
import Gallery from './08/Gallery';
// import RouteMain from './09/RouteMain';
import RecoilMain from './10/RecoilMain';
import Rest from './11/Rest';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RiHomeHeartFill } from "react-icons/ri";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full h-screen mx-auto">
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
          <p>React Basic</p>
          <ul className="flex justify-center items-center text-sm">
            <li className="mx-2 p-2 rounded-r-md
                          hover:bg-white hover:text-blue-600">
              <Link to='/'>시계</Link>
            </li>
            <li className="mx-2 p-2 rounded-r-md
                          hover:bg-white hover:text-blue-600">
              <Link to='/lotto'>로또</Link>
            </li>
            <li className="mx-2 p-2 rounded-r-md
                          hover:bg-white hover:text-blue-600">
              <Link to='/traffic'>교통사고</Link>
            </li>
            <li className="mx-2 p-2 rounded-r-md
                          hover:bg-white hover:text-blue-600">
              <Link to='/add'>더하기연산</Link>
            </li>
            <li className="mx-2 p-2 rounded-r-md
                          hover:bg-white hover:text-blue-600">
              <Link to='/gallery'>관광앱</Link>
            </li>
            <li className="mx-2 p-2 rounded-r-md
                          hover:bg-white hover:text-blue-600">
              <Link to='/recoil'>Recoil</Link>
            </li>
            <li className="mx-2 p-2 rounded-r-md
                          hover:bg-white hover:text-blue-600">
              <Link to='/rest'>JSON CRUD예제</Link>
            </li>
          </ul>
          <p><Link to='/'><RiHomeHeartFill/></Link></p>
        </header>
        {/* grow : header와 footer를 쓰고 남은 영역을 모두 사용 */}
        <main className='grow w-full flex justify-center items-start overflow-y-auto'>
          <Routes>
             <Route path='/' element={<MyClock />}/>
             <Route path='/lotto' element={<Lotto />}/>
             <Route path='/traffic' element={<Traffic />}/>
             <Route path='/add' element={<MyRefAdd />}/>
             <Route path='/gallery' element={<Gallery />}/>
             <Route path='/recoil' element={<RecoilMain />}/>
             <Route path='/rest' element={<Rest />}/>
            <Route />
          </Routes>
          {/* <MyClock /> */}
          {/* <MyDiv1/> */}
          {/* <MyList/> */}
          {/* <Lotto /> */}
          {/* {<Traffic />} */}
          {/* <MyRef /> */}
          {/* <MyRefAdd /> */}
          {/* <Gallery /> */}
          {/* <RouteMain /> */}
        </main>
        <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
          ⓒ Jeong Woo Jeong
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;