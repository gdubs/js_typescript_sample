import * as React from 'react';

interface IProps {
    keyid?: any;
    value: any;
    placeholder: string;
    disabled: boolean;
    propName: string;
    onBlurHandler: (e: React.ChangeEvent<{value:unknown}>) => void;
    onChangedHandler?: (e: React.ChangeEvent<{value:unknown}>) => void;
}

export const InputText: React.FC<IProps> = ({ keyid, value, placeholder, disabled, propName, onBlurHandler, onChangedHandler } : IProps) => {

    const [val, setVal] = React.useState<any>(value);

    React.useEffect(() => {
        if(value != val)
            setVal(value);
    }, [value])

    const onLocalChangedHandler = (e: React.ChangeEvent<{value:unknown}>) => {
        setVal(e.target.value);
    }
    return (
        <input  key="keyid"
                test-id="common-input"
                className="form-control"
                type="text"
                step="0.1"
                value={val}
                placeholder={placeholder}
                onBlur={onBlurHandler}
                disabled={disabled}
                onChange={onLocalChangedHandler}
                name={propName}
            />
    )
}