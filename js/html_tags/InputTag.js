//-------------------------------------------------------
//
// InputTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class InputTag extends HtmlTag
{
    constructor(strName, strType, strValue)
    {
        super('input', strValue);

        if (strName && (strName.length > 0))
        {
            super.addAttr('name', strName);
        }

        if (strType && (strType.length > 0))
        {
            super.addAttr('type', strType);
        }

        this.m_fEndTag = false;
    }
}

