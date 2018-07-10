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

