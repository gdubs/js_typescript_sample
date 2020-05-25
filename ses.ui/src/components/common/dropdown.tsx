import * as React from 'react';
import { IOption, ExecutionMode } from '../../services/domain.interfaces';


interface IProps {
    options: IOption[];
    selectedValue?: ExecutionMode;
    propName: string;
    onChangedHandler: (e: React.ChangeEvent<{value:unknown}>) => void;
}

export const Dropdown: React.FC<IProps> = ({ options, selectedValue, propName, onChangedHandler } : IProps) => {

    const options_list = options.map(o => {
        return <option key={o.id} value={o.value}>{o.text}</option> 
    })
    options_list.unshift(<option value="-1">Select</option>)

    return (
        <div test-id="common-dropdown">
            <select className="form-control" value={selectedValue} onChange={onChangedHandler} name={propName}>
                {options_list}
            </select>
        </div>
    )
}