import React, { ChangeEvent, FormEvent, useState } from "react";

// 새 할일 등록하는 컴포넌트
function TodoInsert() {
    const [value, setValue] = useState('');
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="할일을 입력하세요."
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    );
};

export default TodoInsert;