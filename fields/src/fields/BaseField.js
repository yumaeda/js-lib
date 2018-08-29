import { InputTag } from '../../../vendor/html-tags'

//-------------------------------------------------------
//
// BaseField
//
//-------------------------------------------- YuMaeda --
export class BaseField extends InputTag
{
    constructor(strName, strType, strValue)
    {
        super(strName, strType, strValue);

        this.m_fRequired = false;
    }

    get isRequired() { return this.m_fRequired; }
    set isRequired(fRequired) { this.m_fRequired = fRequired; }

    toHtml()
    {
        if (this.m_fRequired)
        {
            this.addAttr('required', 'required');
        }

        return super.toHtml();
    }
}

