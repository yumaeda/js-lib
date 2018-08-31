/**
 * Base class of all the HTML tags
 *
 * @author Yukitaka Maeda
 */
class HtmlTag
{
    tag: string;
    value: string;
    attributes: { key: string, value: string }[];
    classes: string[];
    is_container: boolean;
    is_self_closing: boolean;

    /**
     * Constructor for HtmlTag class
     *
     * @param string tag
     * @param string value
     * @return void
     */
    constructor(tag: string, value: string)
    {
        this.tag             = tag;
        this.value           = value;
        this.attributes      = []; 
        this.classes         = [];
        this.is_container    = false;
        this.is_self_closing = true;
    }

    /**
     * Generates value of "class" attribute
     *
     * @access private
     * @return string
     */
    _generateClassAttribute(): string
    {
        let class_value = '',
            class_count = this.classes.length;

        for (var i = 0; i < class_count; ++i) {
            var cur_class = this.classes[i];
            if (cur_class) {
                class_value += cur_class;
            }

            if (i < (class_count - 1)) {
                class_value += ' ';
            }
        }

        return ('class="' + class_value + '"');
    }

    /**
     * Generates HTML opening tag
     *
     * @access private
     * @return string
     */
    _generateOpeningTag(): string
    {
        let html = '';

        if (this.tag && (this.tag.length > 0)) {
            html = '<' + this.tag;

            // Adds class attributes.
            let class_attr = this._generateClassAttribute();
            if (class_attr !== '')
            {
                html += ' ' + class_attr;
            }

            let attr_count = this.attributes.length;
            for (var i = 0; i < attr_count; ++i)
            {
                let attr = this.attributes[i];
                if (attr.value && (attr.key !== 'class'))
                {
                    html += ' ' + attr.key + '="' + attr.value + '"';
                }
            }

            html += '>';
        }

        return html;
    }

    /**
     * Generates HTML closing tag
     *
     * @access private
     * @return string
     */
    _generateClosingTag(): string
    {
        return ('</' + this.tag + '>');
    }

    /**
     * Adds an attribute for HTML tag
     *
     * @access public 
     * @param string key
     * @param string value
     * @return void
     */
    addAttr(key: string, value: string)
    {
        // key cannot be an empty string, but value can.
        if ((key && key.length > 0) && (value)) {
            this.attributes.push({ key: key, value: value});
        }
    }

    /**
     * Adds a "class" attribute
     *
     * @access public 
     * @param string class_name
     * @return void
     */
    addClass(class_name: string): void
    {
        if (class_name && (class_name.length > 0)) {
            this.classes.push(class_name);
        }
    }

    /**
     * Converts this object to actual HTML markup
     *
     * @access public 
     * @return string
     */
    toHtml(): string
    {
        if (!this.is_self_closing && this.value) {
            this.attributes.push({ key: 'value', value: this.value });
        }

        let html = this._generateOpeningTag();
        if (this.is_self_closing) {
            html += this.value + this._generateClosingTag();
        }

        return html;
    }
}

