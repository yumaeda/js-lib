//-------------------------------------------------------
//
// TableContainer
//
//-------------------------------------------- YuMaeda --
class TableContainer extends HtmlTag
{
    constructor(strTag)
    {
        super(strTag, '');

        this.m_rgobjRow = [];
    }

    get lastRow()
    {
        return this.m_rgobjRow[this.m_rgobjRow.length - 1];
    }

    addRow(objRow)
    {
        this.m_rgobjRow.push(objRow);
    }

    toHtml()
    {
        var cRow = this.m_rgobjRow.length;
        for (var i = 0; i < cRow; ++i)
        {
            this.m_strValue += this.m_rgobjRow[i].toHtml();
        }

        return super.toHtml();
    }
}


//-------------------------------------------------------
//
// TableTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class TableTag extends HtmlTag
{
    constructor()
    {
        super('table', '');

        this.m_objHead = new TableContainer('thead'),
        this.m_objBody = new TableContainer('tbody'),
        this.m_objFoot = new TableContainer('tfoot');
    }

    get head() { return this.m_objHead; }
    get body() { return this.m_objBody; }
    get foot() { return this.m_objFoot; }

    toHtml()
    {
        this.m_strValue += this.m_objHead.toHtml();
        this.m_strValue += this.m_objBody.toHtml();
        this.m_strValue += this.m_objFoot.toHtml();

        return super.toHtml();
    }
}

