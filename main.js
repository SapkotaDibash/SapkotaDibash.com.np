const FILE_LINKS_OBJ = {
    "root": [

        // { "display_name": 'PDF Files', 'link_obj': 'coop_imp_files' },
        // { "display_name": 'Coop_Imp Files_2', 'link_obj': 'coop_imp_files_2' },
        {
            "display_name": 'Sports',
            'link_obj': 'Sports'
        },

        {
            "display_name": 'Miscellanous',
            'link_obj': 'Misc_01'
        },
    ],


    // "coop_imp_files": [

    //     {
    //         "display_name": 'saving policy',
    //         'link_obj': './files/Policies/saving_policy.pdf'
    //     },
    //     {
    //         "display_name": 'Member Survey Form',
    //         'link_obj': './files/Policies/member_Survey_format.pdf'
    //     },
    //     {
    //         "display_name": 'Business Plan',
    //         'link_obj': './files/Policies/4_Year_Business_plan_final.pdf'
    //     },

    // ],

    // "coop_imp_files_2": [

    //     // { "display_name": 'File_2', 'link_obj': './files/coop_imp_files/BoD-Self-evaluation-final.xlsx' },

    // ],

    "Sports": [{
            "display_name": 'FootBall Live',
            'link_obj': 'https://x.livehd7xc.com/albaplayer/bein1/?serv=1'
        },


    ],

    "Misc_01": [

        {
            "display_name": 'File Compress',
            'link_obj': 'https://www.wecompress.com/en/'
        },      
        {
            "display_name": 'local governments',
            'link_obj': 'http://103.69.124.141/gis/website/'
        },


    ],



}
createHTML();













function createHTML() {
    for (let i = 0; i < FILE_LINKS_OBJ['root'].length; i++) {
        const r = FILE_LINKS_OBJ['root'][i];
        const link_key = r['link_obj']
        const subLinks_HTM = subLinks(FILE_LINKS_OBJ[link_key])



        let OPEN_STATUS = (i == 0 ||i == 1) ? 'open' : '';

        const HTML = `            
   
    <details class="detail" ${OPEN_STATUS}>
        <summary><strong>${r['display_name']}</strong></summary>
        <div class="links_container">${subLinks_HTM}</div>
    </details>

    `;


        $('.container').append(HTML);


    }
}


function subLinks(OBJ) {
    let HTML_LINKS = '';
    for (let i = 0; i < OBJ.length; i++) {
        const r = OBJ[i];
        const SN = ( i + 1).toString().padStart(2, 0);
        HTML_LINKS += `${SN}. <a href="${r['link_obj']}">${r['display_name']}</a><br>`;
    }
    return HTML_LINKS;
}





$('summary').click(function () {
    $('.detail').removeAttr('open');
    $(this).attr('open')
});
