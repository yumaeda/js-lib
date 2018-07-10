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

