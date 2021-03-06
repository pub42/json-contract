import Option from "./Option";
import SelectItem, { SelectItemBuilder } from "./SelectItem";
import Reason from "./Reason";
import Document from "./Document";
export default class OptionSelect extends Option {
    options: SelectItem[];
    constructor(id: string, type: string, label: string, options: SelectItem[], isRequired?: boolean, isHidden?: boolean, description?: string, anyData?: string);
    static buildOption({ anyData, description, id, isRequired, isHidden, label, options, type }: OptionSelectBuilder): OptionSelect;
    validate(value: any, document?: Document): boolean;
    getRejectReason(value: any, document?: Document): Reason | undefined;
    getSelected(value: any): SelectItem;
    getJSON(): Option;
}
export interface OptionSelectBuilder extends Option {
    options: SelectItemBuilder[];
}
