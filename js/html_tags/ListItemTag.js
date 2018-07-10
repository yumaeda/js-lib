//-------------------------------------------------------
//
// ListItemTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class ListItemTag extends HtmlTag
{
    constructor(strInnerHtml)
    {
        super('li', strInnerHtml);
    }
}

