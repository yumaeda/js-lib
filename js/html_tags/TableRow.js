//-------------------------------------------------------
//
// TableRow
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class TableRow extends HtmlTag
{
    constructor()
    {
        super('tr', '');
        this.m_rgobjColumn = [];
    }

    addColumn(objColumn)
    {
        this.m_rgobjColumn.push(objColumn);
    }

    toHtml()
    {
        var cColumn = this.m_rgobjColumn.length;
        for (var i = 0; i < cColumn; ++i)
        {
            this.m_strValue += this.m_rgobjColumn[i].toHtml();
        }

        return super.toHtml();
    }
}

