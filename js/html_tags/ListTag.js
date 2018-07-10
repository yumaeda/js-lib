//-------------------------------------------------------
//
// ListTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class ListTag extends HtmlTag
{
    constructor(fOrdered)
    {
        if (fOrdered)
        {
            super('ol', '');
        }
        else
        {
            super('ul', '');
        }

        this.m_rgobjItem = [];
        this.m_fContainer = true;
    }

    addItem(objItem)
    {
        this.m_rgobjItem.push(objItem);
    }

    toHtml()
    {
        var cItem = this.m_rgobjItem.length;
        for (var i = 0; i < cItem; ++i)
        {
            this.m_strValue += this.m_rgobjItem[i].toHtml();
        }

        return super.toHtml();
    }
}

