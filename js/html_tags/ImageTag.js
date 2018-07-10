//-------------------------------------------------------
//
// ImageTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class ImageTag extends HtmlTag
{
    constructor(strUrl)
    {
        super('img', '');
        super.addAttr('src', strUrl);

        this.m_fEndTag = false;
    }
}

