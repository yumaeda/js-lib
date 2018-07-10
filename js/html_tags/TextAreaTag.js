//-------------------------------------------------------
//
// TextAreaTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class TextAreaTag extends HtmlTag
{
    constructor(strName, strValue)
    {
        super('textarea', strValue);
        super.addAttr('name', strName);
        super.addAttr('rows', '4');
    }
}

