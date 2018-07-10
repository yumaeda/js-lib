//-------------------------------------------------------
//
// DivTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class DivTag extends HtmlTag
{
    constructor(strInnerHtml)
    {
        super('div', strInnerHtml);

        this.m_fContainer = true;
    }
}

