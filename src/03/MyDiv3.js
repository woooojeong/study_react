
// export default function MyDiv3(props) {
// 구조분해 할당으로 변경
export default function MyDiv3({d1, d2, d3}) {
  return (
    <div className="flex flex-col p-5 m-10 w-3/4 h-3/4 bg-pink-300 text-white">
      {/* myDiv3 */}
      {/* {`${props.d1} > ${props.d2} > ${props.d3}`} */}
      {`${d1} > ${d2} > ${d3}`}
    </div>
  )
}
