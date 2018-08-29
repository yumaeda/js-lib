//-------------------------------------------------------
//
// BooleanField
//
// [Dependencies]
//     BaseField.js
//
//-------------------------------------------- YuMaeda --
export class BooleanField extends BaseField
{
    constructor(strName, fSelected)
    {
        super(strName, 'checkbox', '1');

        if (fSelected)
        {
            this.addAttr('checked', 'checked');
        }
    }
}

