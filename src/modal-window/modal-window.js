import { TableTag, TableRow, TableColumn, DivTag } from '../../vendor/html-tags'

jQuery.fn.center = function()
{
    this.css('position', 'absolute');
    this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
    this.css('left', ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + 'px');

    return(this);
};

//-------------------------------------------------------
//
// ModalWindow.js
//
// [External Dependencies: jquery.js]
//
//-------------------------------------------- YuMaeda --
class ModalWindow
{
    constructor(fShowComment)
    {
        if (!ModalWindow.instance)
        {
            this.$m_backgroundPane = $('<div id="background-pane"></div>');
            this.$m_dialogPane     = $('<div id="dialog-pane"></div>');
            this.$m_commentPane    = null;

            this.$m_backgroundPane.appendTo($('body'));
            this.$m_dialogPane.insertAfter(this.$m_backgroundPane);

            if (fShowComment)
            {
                this.$m_commentPane = $('<div id="comment-pane"></div>');
                this.$m_commentPane.insertAfter(this.$m_dialogPane);
            }

            ModalWindow.instance = this;
        }

        return ModalWindow.instance;
    }

    _onClose()
    {
        var self = this;

        $('table#dialog-table').on('click', 'span#close-btn', function()
        {
            self.$m_backgroundPane.fadeOut('slow');
            self.$m_dialogPane.fadeOut('slow');
            if (self.$m_commentPane)
            {
                self.$m_commentPane.fadeOut('slow');
            }

            // Re-enable scrollbar.
            $('body').css('overflow', 'auto');

            // Re-enable arrow keys.
            $(document).unbind('keydown');
        });
    }

    _toggleComment()
    {
        this.$m_commentPane.slideToggle('slow');
    }

    _setCommentBottom()
    {
        var intPadding = ($(window).height() - this.$m_dialogPane.height()) / 2;
        this.$m_commentPane.css('bottom', intPadding - $(window).scrollTop() + 'px');
    }

    show(strHtml, strComment)
    {
        var tableTag    = new TableTag(),
            closeBtnRow = new TableRow(),
            contentsRow = new TableRow();

        tableTag.addAttr('id', 'dialog-table');
        closeBtnRow.addColumn(new TableColumn('<span id="close-btn">x</span>'));
        contentsRow.addColumn(new TableColumn(strHtml));
        tableTag.head.addRow(closeBtnRow);
        tableTag.body.addRow(contentsRow);

        var innerDialog = new DivTag(tableTag.toHtml());
        innerDialog.addAttr('id', 'inner-dialog-pane');

        var outerDialog = new DivTag(innerDialog.toHtml());
        outerDialog.addAttr('id', 'outer-dialog-pane');

        this.$m_backgroundPane.css({ 'opacity': '0.7' }).center().fadeIn('slow');
        this.$m_dialogPane.html(outerDialog.toHtml()).center().fadeIn('slow');

        this._onClose();

        if (this.$m_commentPane)
        {
            this.$m_dialogPane.find('div#inner-dialog-pane').click(this._toggleComment);

            this._setCommentBottom();
            this.$m_commentPane.html('<p>' + strComment + '</p>').fadeIn('slow');
        }

        // Hide scrollbar while the window is shown.
        $('body').css('overflow', 'hidden');

        // Temporarily disable arrow keys.
        $(document).keydown(function(e)
        {
            switch (e.keyCode)
            {
            case 37:
            case 38:
            case 39:
            case 40:
                e.preventDefault();
                break;
            default:
                break;
            }
        });
    }
}

const instance = new ModalWindow(false);
Object.freeze(instance);

export default instance;

