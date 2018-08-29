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


//-------------------------------------------------------
//
// ButtonTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class ButtonTag extends HtmlTag
{
    constructor(strId, strCaption)
    {
        super('button', strCaption);
        super.addAttr('id', strId);
    }
}


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


//-------------------------------------------------------
//
// HtmlTag
//
//-------------------------------------------- YuMaeda --
class HtmlTag
{
    constructor(strTag, strValue)
    {
        this.m_strTag     = strTag;
        this.m_strValue   = strValue;
        this.m_rgobjAttr  = [];
        this.m_rgstrClass = [];
        this.m_fContainer = false;
        this.m_fEndTag    = true;
    }

    _generateClassAttribute()
    {
        var html     = '',
            cClass   = (this.m_rgstrClass ? this.m_rgstrClass.length : 0),
            strClass = '';

        if (cClass > 0)
        {
            html += 'class="';

            for (var i = 0; i < cClass; ++i)
            {
                strClass = this.m_rgstrClass[i];
                if (strClass && (strClass.length > 0))
                {
                    html += strClass;
                }

                if (i < (cClass - 1))
                {
                    html += ' ';
                }
            }

            html += '"';
        }

        return html;
    }

    _generateBeginTag()
    {
        var html = '';

        if (this.m_strTag && (this.m_strTag.length > 0))
        {
            html = '<' + this.m_strTag;

            // Adds class attributes.
            var strClassAttr = this._generateClassAttribute();
            if (strClassAttr !== '')
            {
                html += ' ' + strClassAttr;
            }

            var cAttr   = (this.m_rgobjAttr ? this.m_rgobjAttr.length : 0),
                objAttr = null;

            for (var i = 0; i < cAttr; ++i)
            {
                objAttr = this.m_rgobjAttr[i];
                if (objAttr.value && (objAttr.key !== 'class'))
                {
                    html += ' ' + objAttr.key + '="' + objAttr.value + '"';
                }
            }

            if (!this.m_fEndTag)
            {
                html += ' />';
            }
            else
            {
                html += '>';
            }
        }

        return html;
    }

    _generateEndTag()
    {
        return ('</' + this.m_strTag + '>');
    }

    addAttr(strKey, strValue)
    {
        // strKey cannot be an empty string, but strValue can.
        if ((strKey && strKey.length > 0) && (strValue))
        {
            this.m_rgobjAttr.push({ key: strKey, value: strValue });
        }
    }

    addClass(strClass)
    {
        if (strClass && (strClass.length > 0))
        {
            this.m_rgstrClass.push(strClass);
        }
    }

    toHtml()
    {
        if (!this.m_fEndTag && this.m_strValue)
        {
            this.m_rgobjAttr.push({ key: 'value', value: this.m_strValue });
        }

        var html =
            this._generateBeginTag(this.m_strTag, this.m_fEndTag, this.m_attrs, this.classes);

        if (this.m_fEndTag)
        {
            html += this.m_strValue + this._generateEndTag(this.m_strTag);
        }

        return html;
    }
}


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


//-------------------------------------------------------
//
// InputTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class InputTag extends HtmlTag
{
    constructor(strName, strType, strValue)
    {
        super('input', strValue);

        if (strName && (strName.length > 0))
        {
            super.addAttr('name', strName);
        }

        if (strType && (strType.length > 0))
        {
            super.addAttr('type', strType);
        }

        this.m_fEndTag = false;
    }
}


//-------------------------------------------------------
//
// LabelTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class LabelTag extends HtmlTag
{
    constructor(strFor, strInnerHtml)
    {
        super('label', strInnerHtml);

        if (strFor && (strFor.length > 0))
        {
            super.addAttr('for', strFor);
        }
    }
}


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


//-------------------------------------------------------
//
// SelectTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class SelectTag extends HtmlTag
{
    constructor()
    {
        super('select', '');

        this.m_rgobjOption = [];
        this.m_iSelected   = -1;
        this.m_iDisabled   = -1;
    }

    addOption(strText, strValue)
    {
        if (strText && (strText.length > 0))
        {
            this.m_rgobjOption.push({ text: strText, value: strValue });
        }
    }

    addLabel(strText)
    {
        this.m_iDisabled = this.m_rgobjOption.length;
        this.m_rgobjOption.push({ text: strText, value: -1 });
    }

    setSelectedIndex(index)
    {
        this.m_iSelected = index;
    }

    toHtml()
    {
        var cOption   = this.m_rgobjOption.length,
            objOption = null;

        for (var i = 0; i < cOption; ++i)
        {
            objOption = this.m_rgobjOption[i];
            this.m_strValue += '<option value="' + objOption.value + '"';

            if (this.m_iDisabled == i)
            {
                this.m_strValue += ' disabled="disabled"';
            }

            if (this.m_iSelected == i)
            {
                this.m_strValue += ' selected="selected"';
            }
                
            this.m_strValue += '>' + objOption.text + '</option>';
        }

        return super.toHtml();
    }
}


//-------------------------------------------------------
//
// SpanTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class SpanTag extends HtmlTag
{
    constructor(strInnerHtml)
    {
        super('span', strInnerHtml);
    }
}


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


//-------------------------------------------------------
//
// TextAreaTag
//
// [Dependencies]
//     htmltag.js
//
//-------------------------------------------- YuMaeda --
export class TextAreaTag extends HtmlTag
{
    constructor(strName, strValue)
    {
        super('textarea', strValue);
        super.addAttr('name', strName);
        super.addAttr('rows', '4');
    }
}

