//-------------------------------------------------------
//
// ButtonTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class ButtonTag extends HtmlTag
{
    constructor(strId, strCaption)
    {
        super('button', strCaption);
        super.addAttr('id', strId);
    }
}

