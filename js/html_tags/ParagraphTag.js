//-------------------------------------------------------
//
// ParagraphTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class ParagraphTag extends HtmlTag
{
    constructor(strInnerHtml)
    {
        super('p', strInnerHtml);
        this.m_fContainer = true;
    }
}

