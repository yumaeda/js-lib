import { InputTag } from '../../vendor/html-tags'

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

