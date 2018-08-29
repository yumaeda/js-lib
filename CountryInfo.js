//-------------------------------------------------------
//
// CountryInfo
//
//-------------------------------------------- YuMaeda --
class CountryInfo
{
    constructor()
    {
        if (!CountryInfo.instance)
        {
            this.m_jpnNameHash =
            {
                'France':         'フランス',
                'Austria':        'オーストリア',
                'Italy':          'イタリア',
                'Germany':        'ドイツ',
                'Japan':          '日本',
                'Australia':      'オーストラリア',
                'Portugal':       'ポルトガル',
                'United States':  'アメリカ合衆国',
                'New Zealand':    'ニュージーランド',
                'South Africa':   '南アフリカ',
                'Spain':          'スペイン',
                'Croatia':        'クロアチア',
                'Argentina':      'アルゼンチン',
                'Hungary':        'ハンガリー',
                'United Kingdom': 'イギリス',
                'Rumania':        'ルーマニア',
                'Costa Rica':     'コスタリカ',
                'Colombia':       'コロンビア',
                'Uyghur Turpan':  'ウイグル・トルファン',
                'India':          'インド',
                'Malawi':         'マラウイ共和国',
                'Turkey':         'トルコ',
                'Canada':         'カナダ',
                'Ukraine':        'ウクライナ',
                'Switzerland':    'スイス',
                'Bulgaria':       'ブルガリア',
                'Lebanon':        'レバノン',
                'Chile':          'チリ',
                'Taiwan':         '台湾',
                'Moldova':        'モルドヴァ',
                'Greece':         'ギリシャ',
                'Georgia':        'ジョージア',
                'Scotland':       'スコットランド'
            };

            CountryInfo.instance = this;
        }

        return CountryInfo.instance;
    }

    getJpnName(strKey) { return this.m_jpnNameHash[strKey]; }

    getCountryAsInt(strKey)
    {
        var i      = 1,
            iFound = 0;

        for (var hashKey in this.m_jpnNameHash)
        {
            if (hashKey == strKey)
            {
                iFound = i;
            }

            ++i;
        }

        return iFound;
    }

    getImgName(strKey)
    {
        return strKey.toLowerCase().replace(/\s/g, '_');
    }

    getImgFileName(strKey)
    {
        return (this.getImgName(strKey) + '.png');
    }

    getImgCssName(strKey)
    {
        return (this.getImgName(strKey) + 'Img');
    }
}

const instance = new CountryInfo();
Object.freeze(instance);

export default instance;

