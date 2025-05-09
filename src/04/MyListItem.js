

export default function MyListItem({title, imgUrl, content}) {
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
            <span>❤️</span>
            <span className="inline-flex mx-2 font-bold">좋아요</span>
            <span className="font-bold text-xl">0</span>
        </div>
      </div>
    </div>
  )
}
