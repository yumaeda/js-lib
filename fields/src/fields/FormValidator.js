//-------------------------------------------------------
// FormValidator
//-------------------------------------------- YuMaeda --
var FormValidator = (function()
{
    // Private members

    var _validate = function($form)
        {
            var fValid = true;

            $fields = $form.find(':input').not(':hidden, button');
            $fields.removeClass('errorFld');
            $fields.removeAttr('title');

            $fields.each(function(idx, el)
            {
                var $this = $(this);

                if ($this.val() === '')
                {
                    if ($this.attr('required') === 'required')
                    {
                        fValid = false;
                        $this.addClass('errorFld');
                        $this.attr('title', Strings.getString('EMPTY_FLD_MSG'));
                    }
                }
                else
                {
                    if ($this.attr('type') === 'number')
                    {
                        if (!$.isNumeric($this.val()) || ($this.val() <= 0))
                        {
                            fValid = false;
                            $this.addClass('errorFld');
                            $this.attr('title', Strings.getString('INVALID_NUMBER_MSG'));
                        }
                    }
                }
            });

            return fValid;
        };

    // Public members
   
    return(
    {
        validate: _validate
    });
})();
