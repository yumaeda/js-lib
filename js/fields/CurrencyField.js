//-------------------------------------------------------
//
// CurrencyField
//
// [Dependencies]
//     NumberField.js
//
//-------------------------------------------- YuMaeda --
export class CurrencyField extends NumberField
{
    constructor(strName, strValue)
    {
        super(strName, strValue);

        this.addAttr('step', '10');
        this.m_strUnit = 'yen';
    }

    set unit(strUnit) { this.m_strUnit = strUnit; }

    toHtml()
    {
        return (super.toHtml() + '&nbsp;' + this.m_strUnit);
    }
}

