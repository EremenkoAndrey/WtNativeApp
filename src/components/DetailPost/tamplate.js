export default function template(html, title) {
    const before = `<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
        <link rel='stylesheet' href='https://cdn.whotrades.com/css/mini/612e4f39533ab6944bb0d3349a39c9ff/site-on-platforma.css?612e4f39533ab6944bb0d3349a39c9ff'  />
        <link rel='stylesheet' href='https://cdn.whotrades.com/css/mini/747fd20be0b5b5355308effe8dac831a/site-on-platforma_2.css?747fd20be0b5b5355308effe8dac831a'  />
        <link rel='stylesheet' href='https://cdn.whotrades.com/css/mini/7642f81c6d0e32b431611df507ff1812/whotrades.css?7642f81c6d0e32b431611df507ff1812'  />
        <link rel="stylesheet" href="https://whotrades.com/styles/group/main/cached?cache_key=10c7e54cf90e4e3c7aba25cd29a3df37" />
        <link rel='stylesheet' href='https://cdn.whotrades.com/css/mini/9647924404b8318fc2ab242a5eb38959/layout+layout-personal.css?9647924404b8318fc2ab242a5eb38959'  />
        <link rel="stylesheet" href="https://cdn.whotrades.com/css/mini/ada85a35c6657acb4d1de56212ac7145/widget_personalsiteheader_99914b932bd37a50b983c5e7c90ae93b.css" media="all"/>
        <link rel="stylesheet" href="https://cdn.whotrades.com/css/mini/9d2eb10fe467ec2d4460af8e89edcba9/widget_activity_recordadd_99914b932bd37a50b983c5e7c90ae93b.css" media="all"/>
        <link rel="stylesheet" href="https://cdn.whotrades.com/css/mini/e2c0fa1a161ebefca7fc1f5c49371f4e/widget_instrument_timelineinstrumentchartlabels_99914b932bd37a50b983c5e7c90ae93b.css" media="all"/>
        <link rel="stylesheet" href="https://cdn.whotrades.com/css/mini/fa8f03c652c66c18241d65dc5f164fb4/widget_activity_timeline_99914b932bd37a50b983c5e7c90ae93b.css" media="all"/>
        <link rel="stylesheet" href="https://cdn.whotrades.com/css/mini/7fb45ef184e0b5467ee4de73a73013ff/widget_profileinfo_99914b932bd37a50b983c5e7c90ae93b.css" media="all"/>
        <link rel="stylesheet" href="https://cdn.whotrades.com/css/mini/c5e180b480ca732afb7fc0678da319bc/widget_profileinstrumentsites_99914b932bd37a50b983c5e7c90ae93b.css" media="all"/>
        <link rel="stylesheet" href="https://cdn.whotrades.com/css/mini/ea85a064597703bc7a6cd36ef552ce11/widget_profileforecasts_99914b932bd37a50b983c5e7c90ae93b.css" media="all"/>
        <link rel="stylesheet" href="https://cdn.whotrades.com/css/mini/ae8d65e370a2115b47189bd3f9bc55e0/widget_socialsubscribers_99914b932bd37a50b983c5e7c90ae93b.css" media="all"/>
        <link rel="stylesheet" href="https://cdn.whotrades.com/css/mini/c5e180b480ca732afb7fc0678da319bc/widget_profilesites_99914b932bd37a50b983c5e7c90ae93b.css" media="all"/>
        <link rel="stylesheet" href="https://whotrades.com/styles/group/custom-styles/cached?cache_key=cc9067c2ee470dc248b14b194209a34e" />
        <link rel='stylesheet' href='https://cdn.whotrades.com/css/mini/c3b148f4733107f3f7894223ddbdaf38/react-app.css?c3b148f4733107f3f7894223ddbdaf38'  />
        <script src='https://cdn.whotrades.com/js/mini/2e4f9be60e77ad5e49a3b33e0c31607e/environment.js?2e4f9be60e77ad5e49a3b33e0c31607e'></script>
</head>
<body style="padding: 15px; font-size: 16px">`;

    const after = '</body></html>';

    const h1 = title ? `<h1>${title}</h1>` : '';

    return `${before}${h1}${html}${after}`;
}
