import { useEffect, useState } from "react";

export default function UseEffectSample() {
    const [name, setName] = useState('insert name');
    const [nickname, setNickname] = useState('insert nickname');

    // 렌더링 시 실행
    useEffect(() => {
        console.log("component 'Info' 렌더링이 완료되었습니다.");
        console.log({
            name, nickname
        });

        // cleanup 함수
        // 렌더링되기 전에 실행
        return () => console.log("cleanup")
    });

    // 마운트시 실행
    useEffect(() => {
        console.log("component 'Info' 가 마운트 되었습니다.");

        // unmount 되기 전에 실행
        return () => console.log("cleanup2")
    }, []);

    // 특정 값이 업데이트될 때 실행
    useEffect(() => {
        console.log("name 값이 업데이트 되었습니다.");

        // 특정 값이 업데이트되기 전에 실행
        return () => console.log("cleanup3")
    }, [name]);

    return (
       <div>
           <h2>TypeScript useEffect</h2>
           <input onChange={e => setName(e.target.value)} defaultValue={name} />
           <input onChange={e => setNickname(e.target.value)} defaultValue={nickname} />
           <p>이름: {name}</p>
           <p>닉네임: {nickname}</p>
       </div> 
    );
}