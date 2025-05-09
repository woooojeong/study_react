import MyListData from './MyListData.json';
import MyListItem from './MyListItem';

export default function MyList() {
    //console.log(MyListData)
    const tags = MyListData.map(item => 
                                <MyListItem
                                            title = {item.title}
                                            imgUrl = {item.imgUrl}
                                            content = {item.content}
                                />
                            ); //map메소드를 사용하여 아이템의 개수만큼 만들어진 데이터를 tags 변수에 담는다.

  return (
    <div className='w-full grid grid-cols-2 gap-4'>
      {/* <MyListItem/>
      <MyListItem/>
      <MyListItem/>
      <MyListItem/> */}
      {tags}
    </div>
  )
}
