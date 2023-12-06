import Button from './Button'
const list = ["All", "Live", "Gaming", "Songs", "Cooking","News","Tech","Travels","Israel"]
const ButtonList = () => {
  return (
    <div className='flex gap-x-4'>
      {
        list.map((item, index) => (
          <Button key={index} item={item} />
        ))
      }
    </div>
  )
}

export default ButtonList