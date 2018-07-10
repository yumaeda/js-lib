//-------------------------------------------------------
//
// AnchorTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class AnchorTag extends HtmlTag
{
    constructor(strUrl, strInnerHtml)
    {
        super('a', strInnerHtml);
        super.addAttr('href', strUrl);
    }
}

