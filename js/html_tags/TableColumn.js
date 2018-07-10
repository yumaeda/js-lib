//-------------------------------------------------------
//
// TableColumn
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class TableColumn extends HtmlTag
{
    constructor(strInnerHtml)
    {
        super('td', strInnerHtml);
    }
}

