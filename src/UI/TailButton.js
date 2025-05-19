
export default function TailButton({caption, bcolor,handleClick}) {
    const colorB = {
        'blue' : 'bg-blue-600',
        'red' : 'bg-red-600',
        'orange' :'bg-orange-600',
        'lime' : 'bg-lime-600',
        'rose' : 'bg-rose-400'
    }
    const colorBHover = {
        'blue' : 'hover:bg-blue-800',
        'red' : 'hover:bg-red-800',
        'orange' :'hover:bg-orange-800',
        'lime' : 'hover:bg-lime-800',
        'rose' : 'hover:bg-rose-500'
    }
  return (
    <button className={`inline-flex px-5 py-3
                       rounded-md
                       mx-2
                       justify-center items-center
                       text-white font-bold
                       ${colorB[bcolor]}
                       ${colorBHover[bcolor]}`}
            onClick = {handleClick} >
        {caption}
    </button>
  )
}
