//-------------------------------------------------------
//
// LabelTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class LabelTag extends HtmlTag
{
    constructor(strFor, strInnerHtml)
    {
        super('label', strInnerHtml);

        if (strFor && (strFor.length > 0))
        {
            super.addAttr('for', strFor);
        }
    }
}

