//-------------------------------------------------------
//
// WineInfo
//
//-------------------------------------------- YuMaeda --
class WineInfo
{
    constructor()
    {
        if (!WineInfo.instance)
        {
            // Copied from seiya.constants.js.
            // Copied from seiya.wine.functions-0.1.js.
            this.m_jpnTypeHash =
            {
                'Mousseux':       'スパークリング',
                'Mousseux Rouge': 'スパークリング・ルージュ',
                'Mousseux Rosé':  'スパークリング・ロゼ',
                'Blanc':          '白ワイン',
                'Orange':         'オレンジワイン',
                'Gris':           'ヴァン・グリ',
                'Sherry':         'シェリー',
                'Jaune':          'ヴァン・ジョーヌ',
                'Madeira':        'マデイラ',
                'Rouge':          '赤ワイン',
                'Port':           'ポートワイン',
                'Doux':           '甘口ワイン',
                'Rosé':           'ロゼワイン',
                'Eau de Vie':     'オー・ド・ヴィ',
                'Champagne':      'シャンパーニュ',
                'Champagne Rosé': 'シャンパーニュ・ロゼ',
                'Liqueur':        'リキュール',
                'Goods':          'グッズ',
                'Food':           '食品',
                'Beer':           'ビール',
                'Cider':          'シードル'
            };

            WineInfo.instance = this;
        }

        return WineInfo.instance;
    }

    get wineTypeHash() { return this.m_jpnTypeHash; }

    getJpnType(strType) { return this.m_jpnTypeHash[strType]; }

    getTypeCss(strType)
    {
        var strCss = strType.toLowerCase();

        strCss = strCss.replace(/é/g, 'e');
        strCss = strCss.replace(/ /g, '-');

        return strCss;
    }

    // Copied from seiya.wine.functions-0.1.js.
    getVintageHtml(objWine)
    {
        var strCountry = objWine.country,
            strRegion  = objWine.region,
            intVintage = objWine.vintage,
            baseUrl    = '//anyway-grapes.jp/laravel5.3/public/vintages/{0}/{1}'.format(strRegion, intVintage),
            strVintage = objWine.vintage,
            html       = strVintage;

        if ((objWine.region == 'Champagne') ||
            (objWine.region == 'Alsace')    ||
            (objWine.region == 'Bordeaux')  ||
            (objWine.region == 'Sud-Ouest') ||
            (objWine.region == 'Bourgogne') ||
            (objWine.region == 'Vallée de la Loire') ||
            (objWine.region == 'Jura') ||
            (objWine.region == 'Savoie') ||
            (objWine.region == 'Vallée du Rhône') ||
            (objWine.region == 'Provence') ||
            (objWine.region == 'Corse') ||
            ((objWine.region == 'Languedoc') || (objWine.region == 'Roussillon')) ||
            (objWine.region == 'Western Cape'))
        {
            html = '<a href="' + baseUrl + '">{0}</a>'.format(strVintage);
        }

        return html;
    }

    // Copied from seiya.wine.functions-0.1.js.
    getRatingsHtml(objWine)
    {
        var html        = '',
            rgstrRating = objWine.point.split(','),
            cRating     = rgstrRating.length,
            strRating   = '';

        for (var i = 0; i < cRating; ++i)
        {
            strRating = rgstrRating[i].trim();
            if (!strRating.startsWith('○○'))
            {
                html += strRating;
                if (i < (cRating - 1))
                {
                    html += ',&nbsp;&nbsp;&nbsp;&nbsp;';
                }
            }
        }

        return html;
    }

    // Copied from seiya.wine.functions-0.1.js.
    getImporterName(objWine)
    {
        var strImporter = objWine.importer;
        if ((strImporter === 'TAKAHASHI COLLECTION') ||
            (strImporter === 'MATSUYA SAKETEN') ||
            (strImporter === 'KANAI-YA') ||
            (strImporter === 'ESPOA SHINKAWA') ||
            (strImporter === 'LA VINÉE') ||
            (strImporter === 'SENSHO') ||
            (strImporter === 'BERRY BROS & RUDD') ||
            (strImporter === 'LA TOUR D\'ARGENT') ||
            (strImporter === 'TSUCHIURA SUZUKI-YA'))
        {
            strImporter = '';
        }

        return strImporter;
    }
}

const instance = new WineInfo();
Object.freeze(instance);

export default instance;

