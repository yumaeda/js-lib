import { SelectTag } from './html_tags'

//-------------------------------------------------------
//
// ChoiceField
//
//-------------------------------------------- YuMaeda --
export class ChoiceField extends SelectTag
{
    constructor(strName)
    {
        super();

        this.addAttr('name', strName);
    }
}

