import React, { useState, useRef } from "react";

type MyFormProps = {
    onSubmit: (form: {name: string, description: string}) => void;
}

function MyForm({ onSubmit }: MyFormProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        name: "",
        description: ""
    });

    const { name, description } = form;
    
    function onChange (e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };
    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: "",
            description: ""
        });
        
        if (!inputRef.current) return;
        inputRef.current.focus();
    };

    return (
        <div>
            <br/>
            <form onSubmit={handleSubmit}>
                <input name="name" value={name} onChange={onChange} ref={inputRef}/>
                <input name="description" value={description} onChange={onChange} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
};

export default MyForm;