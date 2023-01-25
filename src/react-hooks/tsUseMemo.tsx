import React, { ChangeEvent, MouseEvent, useCallback, useMemo, useRef, useState } from 'react';

function getAverage(numbers: number[]): number {
    console.log("평균값 계산중...");

    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

// useMemo : 특정 값이 바뀔 때만 값을 바꿈 (일반 값을 재사용하는 경우)
// useCallback: 특정 값이 바뀔 때만 함수 생성 (함수를 재사용하는 경우)
export default function UseMemoSample() {
    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState(0);

    // useRef: 렌더링과 관계없는 값을 관리할때 사용. useRef 의 값이 바뀌어도 컴포넌트가 렌더링되지 않음
    const inputEl = useRef<HTMLInputElement>(null);

    // list 값이 바뀔 때만 avg 함수를 호출하고, 바뀌지 않으면 이전 값을 사용함
    // useMemo 를 사용하지 않으면 input 값이 바뀔 때마다 getAverage 함수를 호출한다.
    const avg = useMemo(() => getAverage(list), [list]);

    // 컴포넌트가 처음 렌더링될 때만 함수 생성
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setNumber(+e.target.value);
    }, []);

    // list 또는 number 가 바뀌었을 때만 함수 생성
    // 함수 내부에서 기존의 상태 값을 의존해야 할 때 이렇게 사용한다.
    const onInsert = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        setList([
            ...list,
            number
        ]);
        setNumber(0);
        inputEl.current?.focus();
    }, [list, number]);

    return (
        <div>
            <h2>TypeScript useMemo</h2>
            <input value={number} type='number' onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값: </b>{avg}
            </div>
        </div>
    )
}