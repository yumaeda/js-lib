//-------------------------------------------------------
//
// FigureTag
//
// [Dependencies]
//     htmltag.js
//     imgtag.js
//
//-------------------------------------------- YuMaeda --
export class FigureTag extends HtmlTag
{
    constructor(strUrl, strCaption)
    {
        super('figure', '');

        this.m_objImgTag  = new ImgTag(strUrl);
        this.m_objCaption = new HtmlTag('figcaption', strCaption);
    }

    get image() { return this.m_objImgTag; }
    get caption() { return this.m_objCaption; }

    toHtml()
    {
        this.m_strValue =
            (this.m_objImgTag.toHtml() + this.m_objCaption.toHtml());

        return super.toHtml();
    }
}

