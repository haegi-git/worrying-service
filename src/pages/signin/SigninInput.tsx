type SigninInputProps = {
    htmlFor: string,
    label: string,
    name: string,
    id: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
    minLength: number,
}

export default function SigninInput({
    htmlFor,
    label,
    name,
    id,
    type,
    placeholder,
    value,
    onChange,
    minLength,
}:SigninInputProps){

    const isBelowMinLength = value.length < minLength;
    return(
        <>
        <label htmlFor={htmlFor}>{label}</label>
            <input
            name={name}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{borderColor: isBelowMinLength ? 'red' : 'initial'}}
            />
            {isBelowMinLength && (
        <p style={{ color: 'red' }}>{name} 최소 {minLength}글자 이상 입력해주세요.</p>
        )}
        </>
    )
}