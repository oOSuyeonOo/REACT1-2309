import React, {useState} from 'react'

export default function State() {
    // let count = 0;

    // function countIncrtess(){
    //     count++;
    // }

    // const upButton = document.querySelector('up-button')

    const [count, setCount] = useState(0);
    //=const [카운트, 카운트수정해주는함수] = useState(0);
    // ->훅이라고 한다. 이 형태는 외울것.

    //<p> 현재 온오프 상태 : { isOn ? 'ON' : 'OFF' } </p>
    //                        ㄴ사망연산자!!

    const [isOn, setInOn] = useState(false);

    function changeToggle(){
        setInOn(!isOn)
        console.log(`isOn : ${isOn}`)
    }

  return (
    <div>
        {count}
        <button onClick={ () => {setCount(count+10)}}>올려</button>

        <p> 현재 온오프 상태 : { isOn ? 'ON' : 'OFF' } </p>
        <button onClick={changeToggle}> Button </button>

        
     {/*숙제*/}
     {/*인풋에 글자를 입력한 텍스트가 그대로 출력되게 만들어주세요*/}
     <input type="text" />
     <p className='your-input'> 당신의 입력 : {} </p>
    </div>

  )

 
}
