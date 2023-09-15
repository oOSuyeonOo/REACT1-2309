import React, { useState } from 'react'

export default function EventEdu() {

    // onClack : 요소를 클릭했을 때.
    // onchange : input요소에 변화가 생겼을 때.
    // onSubmit : form이 제출될 때 발생하는 요소.
    // onMouseEnter : 마우스 올렸을 때.
    // onMouseLeave : 마우스 나갔을 때.
    // onKeyDown : 키 누를 때.
    // onKeyUp : 키 누를 때. 
    // onFocus : 요소가 포커스 되었을 때. 
    // onBlur : 요소가 포커스 되었을 때.
    // onLoad : 이미지 등이 리소스를 로드 했을 때.
    // onError : 이미징이 리소스를 로드하는데에 실패했을 때. 
    // onContextMenu : 요소에 마우스 오른쪽 클릭을 했을 때. 
    // onScroll : 요소가 스크롤 될 때. 
    // 사용자 정의 이벤트 : 아래 형태를 이용해 새로운 이벤트 객체 생성 가능..한데 우리가 쓸일이 언제 있으련지?
    // const myEvent = new Event('custom')

    const [isEnter,setIsEnter] = useState(false);

    function handleEnterMouse(){
        setIsEnter(true);
    }
    function handleLeaverMouse(){
        setIsEnter(false);
    }

  return (
    <div>
        {/* 마우스를 올리면 "지금 내 위에 마우스가 있어요."*/}
        {/* 마우스가 밖으로 나가면 "내 위에는 마우스가 없어요" 라고 하단 p태그에 출력되도록 만들어봅시다.*/}

        <p onMouseEnter={handleEnterMouse} onMouseLeave={handleLeaverMouse}> 지금 내 위에는 마우스가 : { isEnter ? '있다' : '없다' } </p>
        
    </div>
  )
}
