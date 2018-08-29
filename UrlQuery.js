//-------------------------------------------------------
//
// UrlQuery
//
//-------------------------------------------- YuMaeda --
class UrlQuery
{
    constructor()
    {
        if (!UrlQuery.instance)
        {
            this._init();

            UrlQuery.instance = this;
        }

        return UrlQuery.instance;
    }

    _init()
    {
        // Get a URL query string w/o '?'.
        var strSearch = window.location.search,
            strQuery  = (strSearch && strSearch.length > 1) ?
                decodeURI(window.location.search.substring(1)) :
                '';

        if (strQuery)
        {
            this.m_queryStringHash = {};

            var rgstrKeyValue = strQuery.split('&'),
                cKeyValue     = rgstrKeyValue.length,
                strKeyValue   = '',
                ichEqual      = -1,
                strKey        = '';

            for (var i = 0; i < cKeyValue; ++i)
            {
                strKeyValue = rgstrKeyValue[i];
                ichEqual    = strKeyValue.indexOf('=');

                if (ichEqual === -1)
                {
                    // Query string such as www.bobskitchen.com?id=2&menu 
                    this.m_queryStringHash[strKeyValue] = '';
                }
                else
                {
                    strKey = strKeyValue.substring(0, ichEqual);
                    if (ichEqual < (strKeyValue.length - 1)) 
                    {
                        this.m_queryStringHash[strKey] = strKeyValue.substr(ichEqual + 1);
                    }
                    else
                    {
                        // Query string such as www.bobskitchen.com?id=2&menu= 
                        this.m_queryStringHash[strKey] = '';
                    }
                }
            }
        }
    }

    getValue(strKey)
    {
        var strValue = '';

        if ((this.m_queryStringHash != null) &&
            (this.m_queryStringHash.hasOwnProperty(strKey)))
        {
            strValue = this.m_queryStringHash[strKey];
        }

        return strValue;
    }
}

const instance = new UrlQuery();
Object.freeze(instance);

export default instance;

