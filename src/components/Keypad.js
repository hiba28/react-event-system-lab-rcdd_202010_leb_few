// Code Keypad Component Here
const Keybad = () => {
  return(
    <div>
      <input type = "text" onKeyUp = {() => console.log('Entering password...')}/>
    </div>
  )
}
